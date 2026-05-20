import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jerdon Litaoen",
  description: "Personal Portfolio of Jerdon Litaoen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 font-sans dark:bg-black">
        <nav className="h-12 flex items-center px-8 bg-emerald-600 font-semibold">
          <Link href={'/'} className="h-full flex items-center px-2 hover:bg-emerald-700">
            Home
          </Link>
          <Link href={'/about'} className="h-full flex items-center px-2 hover:bg-emerald-700">
            About
          </Link>
          <Link href={'/projects'} className="h-full flex items-center px-2 hover:bg-emerald-700">
            Projects
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
