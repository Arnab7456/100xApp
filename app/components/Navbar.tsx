'use client'

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // For the hamburger and close icons
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg border">
      <div className="flex h-[72px] w-full items-center justify-between lg:px-20 px-3 shadow-sm">
        <div className="flex items-center">
          <Link href={'/'} className="flex items-center gap-2">
            <img
              src={'https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg'}
              alt="100xDevs Logo"
              className="size-10 rounded-full"
            />
            <p className="hidden bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-black tracking-tighter text-transparent min-[375px]:block">
              100xDevs
            </p>
          </Link>
        </div>

        <div className="flex items-center">
          <ThemeToggler />

          {/* Hamburger menu button for mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-2">
            <button className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://app.100xdevs.com/signin?callbackUrl=https%3A%2F%2Fapp.100xdevs.com%2F" target='_blank'>Login</Link>
            </button>
            <button className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium transition-all duration-300 hover:opacity-80">
              <Link target="_blank" rel="noopener noreferrer" href="https://harkirat.classx.co.in/new-courses">
                Join now
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col-1  justify-center items-center shadow-lg py-2  gap-4">
          <Link href="https://app.100xdevs.com/signin?callbackUrl=https%3A%2F%2Fapp.100xdevs.com%2F"  target='_blank' className="text-lg font-medium bg-gradient-to-b from-blue-100  text-black px-4 py-2 rounded-md transition-all duration-300 hover:opacity-80  ">
            Login
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://harkirat.classx.co.in/new-courses"
            className="text-lg font-medium bg-gradient-to-b from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:opacity-80"
          >
            Join now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
