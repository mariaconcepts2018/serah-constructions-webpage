"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/icons/Logo";
import dynamic from "next/dynamic";

const ContactModal = dynamic(() => import("./ContactModal"));

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <nav
        className={`absolute lg:fixed top-0 right-0 left-0 w-full z-100 transition px-2 md:px-4`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 bg-neutral-900 border border-neutral-700/50 mt-2 md:mt-4">
          <div className="flex gap-x-4 lg:justify-between h-12 md:h-18 items-center w-full">
            {/* Logo */}

            <Link className="block" href="/">
              <Logo className="w-10 md:w-16 bg-none" />
            </Link>

            <h1 className="lg:text-xl text-neutral-100">Serah Construction</h1>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-12 py-4 px-8 rounded items-center">
              <Link
                href="/"
                className={`text-white ${
                  pathname === "/" && "border-b"
                } hover:text-neutral-400 hover:border-neutral-400 uppercase transition`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-white ${
                  pathname === "/about" && "border-b"
                } hover:text-neutral-400 hover:border-neutral-400 uppercase transition`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`text-white ${
                  pathname === "/services" && "border-b"
                } hover:text-neutral-400 hover:border-neutral-400 uppercase transition`}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`text-white ${
                  pathname === "/projects" && "border-b"
                } hover:text-neutral-400 hover:border-neutral-400 uppercase transition`}
              >
                Projects
              </Link>
              <button
                onClick={handleClick}
                className={`cursor-pointer transition hover:text-neutral-900 hover:bg-primary-400  uppercase transition bg-primary-500 text-neutral-800 px-4 py-2 rounded-xs`}
              >
                GET FREE ESTIMATE
              </button>
            </div>
          </div>
        </div>
      </nav>
      <ContactModal open={open} setOpen={setOpen} />
    </>
  );
}
