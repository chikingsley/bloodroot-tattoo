import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloodroot Tattoo Collective | Morgantown, WV Tattoo Shop",
  description:
    "Bloodroot Tattoo Collective - Premier tattoo shop in Morgantown, West Virginia featuring talented artists specializing in custom tattoos, fine line, realism, and more. Book your appointment today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen relative bg-background`}
      >
        {/* Parallax Background Image */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-fixed opacity-15 pointer-events-none bg-black z-0"
          style={{ 
            backgroundImage: "url('/images/bg-tattoo.jpg')", 
            backgroundAttachment: "fixed"
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
