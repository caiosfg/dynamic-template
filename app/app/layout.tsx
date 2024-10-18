import type { Metadata } from "next";
import "./globals.css";

import Aside from "@/components/Aside";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Dynamic template",
  description: "Generate a dynamic template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gray-200 font-fasolid"
      >
        <Aside />
        {children}
        <Footer />
      </body>
    </html>
  );
}
