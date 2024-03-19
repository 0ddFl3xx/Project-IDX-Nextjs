import type { Metadata } from "next";

import NavBar from "@/components/Nav/NavBar";
import FooterBlock from "@/components/Nav/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDX x Next.js",
  description: "I created a Next.js 14 app from a fucking browser!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <FooterBlock/>
      </body>
    </html>
  );
}
