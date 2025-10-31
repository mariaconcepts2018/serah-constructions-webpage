'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Logo from "@/icons/Logo";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();



  return (
    <nav className={`fixed top-0 right-0 left-0 w-full shadow-md z-100 bg-neutral-900 transition`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between h-12 md:h-20 items-center">
          {/* Logo */}

          <Link href="/">
          <Logo className="w-12 md:w-20" />
          </Link>

          <p className="md:hidden block text-neutral-100">
            <span className="font-bold">SERAH</span> <small>Constructions</small>
          </p>

          {/* Desktop Menu */}
          <div className="static md:relative hidden md:flex gap-12 py-4 px-8 rounded">
            <Link href="/" className={`text-white ${(pathname === '/') && 'border-b'} font-semibold hover:text-secondary-200 hover:border-secondary-200 uppercase transition`}>
              Home
            </Link>
            <Link href="/about" className={`text-white ${(pathname === '/about') && 'border-b'} font-semibold hover:text-secondary-200 hover:border-secondary-200 uppercase transition`}>
              About
            </Link>
            <Link href="/services" className={`text-white ${(pathname === '/services') && 'border-b'} font-semibold hover:text-secondary-200 hover:border-secondary-200 uppercase transition`}>
              Services
            </Link>
            <Link href="/projects" className={`text-white ${(pathname === '/projects') && 'border-b'} font-semibold hover:text-secondary-200 hover:border-secondary-200 uppercase transition`}>
              Projects
            </Link>
            <Link href="/contact" className={`text-white ${(pathname === '/contact') && 'border-b'} font-semibold hover:text-secondary-200 hover:border-secondary-200 uppercase transition`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute w-full md:hidden bg-neutral-800 border border-neutral-300 text-white">
          <div className="flex flex-col space-y-2 gap-4 p-4 pb-8 items-center">
            <Link onClick={()=> setIsOpen(false)} href="/" className="font-semibold">
              Home
            </Link>
            <Link onClick={()=> setIsOpen(false)} href="/about" className="font-semibold">
              About
            </Link>
            <Link onClick={()=> setIsOpen(false)} href="/services" className="font-semibold">
              Services
            </Link>
            <Link onClick={()=> setIsOpen(false)} href="/projects" className="font-semibold">
              Projects
            </Link>
            <Link onClick={()=> setIsOpen(false)} href="/contact" className="font-semibold">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
