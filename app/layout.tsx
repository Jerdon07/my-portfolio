import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "devicon/devicon.min.css";
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

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

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
      <body className="h-full flex flex-col bg-zinc-950 text-white font-sans">
        <header className="flex items-center justify-between px-10 py-5 border-b border-zinc-800/60">
          <Link
            href="/"
            className="text-sm font-bold tracking-widest uppercase text-zinc-100 hover:text-emerald-400 transition-colors duration-200"
          >
            JL
          </Link>
          <nav className="flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200 tracking-wide"
              >
                {label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1 flex flex-col overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
