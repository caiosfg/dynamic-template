import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Aside from "@/components/Aside";
import Footer from "@/components/Footer";

const faSolid = localFont({
  src: "./fonts/fa-solid-900.woff2",
  weight: "400 700",
  style: "normal italic",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${faSolid.className} bg-gray-200`}
      >
        <Aside />
        {children}
        <Footer />
      </body>
    </html>
  );
}
