import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Savatronic Tech | Rehabilitation Innovations",
  description: "Engineering accessible rehabilitation technologies for neurological and motor healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <head>
        {/* Overused Grotesk — same font as Trilo.bio */}
        <link
          href="https://fonts.cdnfonts.com/css/overused-grotesk"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased min-h-full flex flex-col bg-background text-white`}
      >
        <ScrollReveal />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
