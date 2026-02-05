import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import NavServicesDropdown from "./components/NavServicesDropdown";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gutter Cleaning | Professional & Reliable",
  description: "Professional gutter cleaning services. Residential & commercial. Prevent water damage—book a quote today.",
};

function Nav() {
  return (
    <header className="px-4 py-6 sm:px-6">
      <nav
        className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-lg shadow-zinc-200/50 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-10"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-teal-600 hover:text-teal-700 sm:items-start"
        >
          <span
            className="flex h-10 w-24 shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 px-1 text-center text-[10px] leading-tight text-zinc-500"
            aria-hidden
          >
            Put your Logo here!
          </span>
          <span className="text-xl font-semibold">Gutter Clean</span>
        </Link>
        <ul className="flex flex-wrap items-center justify-center gap-4 text-xl font-semibold text-zinc-600 sm:gap-6">
          <li>
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/AboutUs" className="hover:text-teal-600">
              About Us
            </Link>
          </li>
          <NavServicesDropdown />
          <li>
            <Link href="/contact" className="hover:text-teal-600">
              Get a Quote
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-white text-zinc-900`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
