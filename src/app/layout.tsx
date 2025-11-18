import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/navbar"
import Footer from "../components/layout/footer"



export const metadata: Metadata = {
  title: "Vorniqo Solution",
  description: "A Award Winning Software Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
