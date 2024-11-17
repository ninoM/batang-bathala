"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@supabase/supabase-js";
import { LayoutDashboard, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { signout } from "./signout";

export const Header = ({ user }: { user?: User | null }) => {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    if (pathname !== "/") return;
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      className={`py-4 flex top-0 left-0 w-full z-50 text-white transition-colors duration-300 ease-in-out ${
        pathname === "/" ? "fixed" : "block"
      } ${
        scrollPosition > 50 || pathname !== "/"
          ? "bg-violet-950"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-row justify-between items-center px-4">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Image
            src="/logo.webp"
            width={40}
            height={40}
            alt="batang bathala logo"
            className="w-10 aspect-square rounded-full border-2 border-purple-700"
          />
          <span className="text-2xl font-bold text-white">Batang Bathala</span>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Classes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                Contact
              </a>
            </li>
            {user && (
              <li>
                <AvatarMenu
                  onLogout={async () => {
                    await signout();
                  }}
                />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const AvatarMenu = ({
  userName = "User",
  onLogout = () => console.log("Logout clicked"),
}: {
  userImage?: string;
  userName?: string;
  onLogout?: () => void;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userName.toLowerCase()}@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link prefetch href="/dashboard">
          <DropdownMenuItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
