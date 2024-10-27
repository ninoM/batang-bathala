import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";
import { Header } from "./header";
import QueryClientProvider from "./query-client-provider";
import { createClient } from "@/lib/supabase/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Batang Bathala",
  description:
    "Empowering the holistic well-being of the youth through Mindfulness and Yoga",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider>
          <Header user={user.data.user} />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
