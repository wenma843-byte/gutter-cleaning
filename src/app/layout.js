import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import NavServicesDropdown from "./components/NavServicesDropdown";
import "./globals.css";
import RenewLogo from "../RENEW LOGO NO BACKGROUND.png";

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
          className="flex items-center gap-3 text-teal-600 hover:text-teal-700"
          aria-label="Renew Exterior Cleaning home"
        >
          <Image
            src={RenewLogo}
            alt="Renew Exterior Cleaning logo"
            className="h-36 w-auto sm:h-40"
            priority
          />
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
