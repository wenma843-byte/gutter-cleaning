import { Lexend } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import NavServicesDropdown from "./components/NavServicesDropdown";
import "./globals.css";
import RenewLogo from "../RENEW LOGO NO BACKGROUND.png";
import homeBackground from "../Background.jpg";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Gutter Cleaning | Professional & Reliable",
  description: "Professional gutter cleaning services. Residential & commercial. Prevent water damage—book a quote today.",
};

function Nav() {
  return (
    <header className="sticky top-0 z-40 px-10 pt-4 sm:px-12 sm:pt-6">
      <nav
        className="flex w-full flex-col items-center justify-between gap-4 overflow-visible rounded-2xl border border-zinc-200 bg-white/80 px-16 py-5 shadow-lg shadow-zinc-200/50 backdrop-blur-md sm:flex-row sm:px-20"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center text-teal-600 hover:text-teal-700"
          aria-label="Renew Exterior Cleaning home"
        >
          <span className="block h-12 w-24 overflow-hidden sm:h-12 sm:w-36">
            <Image
              src={RenewLogo}
              alt="Renew Exterior Cleaning logo"
              className="h-full w-full object-cover object-center"
              priority
            />
          </span>
        </Link>
        <ul className="flex w-full flex-wrap items-center justify-center gap-6 text-lg font-medium text-zinc-600 sm:w-auto sm:flex-1 sm:justify-between sm:gap-0 sm:pl-80">
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
            <Link href="/gallery" className="hover:text-teal-600">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-teal-600">
              Contact us
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
      <body className={`${lexend.variable} relative min-h-screen antialiased bg-white font-sans text-zinc-900`}>
        <div
          className="hero-background-image fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${homeBackground.src})`,
            opacity: 0.8,
          }}
          aria-hidden
        />
        <Nav />
        {children}
      </body>
    </html>
  );
}
