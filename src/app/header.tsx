"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
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
          <ul className="flex space-x-4">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};
