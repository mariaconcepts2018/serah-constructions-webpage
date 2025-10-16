'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md md:sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32 items-center ">
          {/* Logo */}
          <Link href="/" className="font-bold text-gray-800 text-center">
          <Image src="/logo.png" height={200} width={200} alt="logo" className="w-24 h-24" />
          </Link>

          {/* Desktop Menu */}
          <div className="static md:relative hidden md:flex space-x-8">
            <Link href="/" className={`text-secondary-700 ${(pathname === '/') && 'border-b'} font-semibold hover:text-primary-500 hover:border-primary-500 uppercase transition`}>
              Home
            </Link>
            <Link href="/about" className={`text-secondary-700 ${(pathname === '/about') && 'border-b'} font-semibold hover:text-primary-500 hover:border-primary-500 uppercase transition`}>
              About
            </Link>
            <Link href="/services" className={`text-secondary-700 ${(pathname === '/services') && 'border-b'} font-semibold hover:text-primary-500 hover:border-primary-500 uppercase transition`}>
              Services
            </Link>
            <Link href="/projects" className={`text-secondary-700 ${(pathname === '/projects') && 'border-b'} font-semibold hover:text-primary-500 hover:border-primary-500 uppercase transition`}>
              Projects
            </Link>
            <Link href="/contact" className={`text-secondary-700 ${(pathname === '/contact') && 'border-b'} font-semibold hover:text-primary-500 hover:border-primary-500 uppercase transition`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
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
        <div className="absolute w-full md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-semibold">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-semibold">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-semibold">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-semibold">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
