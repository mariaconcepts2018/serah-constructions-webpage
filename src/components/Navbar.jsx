'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 right-0 left-0 w-full z-100 ${isOpen?'bg-white':'bg-none'} transition ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between h-32 items-center ">
          {/* Logo */}
          <Link href="/" className="font-bold text-gray-800 text-center">
          <Image className="bg-white md:w-32 md:h-32 rounded-full" src="/logo.png" height={100} width={100} alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="static md:relative hidden md:flex gap-12 bg-black/50 py-4 px-8 rounded">
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
            className="md:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
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
                className="h-6 w-6 text-white"
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
        <div className="absolute w-full md:hidden bg-white">
          <div className="flex flex-col space-y-2 gap-4 p-4 pb-8 items-center">
            <Link onClick={()=> setIsOpen(false)} href="/" className="text-gray-700 hover:text-primary-600 font-semibold">
              Home
            </Link>
            <Link onClick={()=> setIsOpen(false)} href="/about" className="text-gray-700 hover:text-primary-600 font-semibold">
              About
            </Link>
            <Link onClick={()=> setIsOpen(false)} href="/services" className="text-gray-700 hover:text-primary-600 font-semibold">
              Services
            </Link>
            <Link onClick={()=> setIsOpen(false)} href="/projects" className="text-gray-700 hover:text-primary-600 font-semibold">
              Projects
            </Link>
            <Link onClick={()=> setIsOpen(false)} href="/contact" className="text-gray-700 hover:text-primary-600 font-semibold">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
