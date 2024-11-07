'use client'


import Link from 'next/link';

import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg border ">
      <div className="flex h-[72px] w-full items-center justify-between lg:px-20 px-3 shadow-sm">
        <div className="flex items-center">
        <Link href={'/'} className="flex items-center gap-2">
              <img
                src={
                  'https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg'
                }
                alt="100xDevs Logo"
                className="size-10 rounded-full"
              />
              <p
                className={`hidden bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-black tracking-tighter text-transparent min-[375px]:block`}
              >
                100xDevs
              </p>
            </Link>
        </div>
        <div className="flex items-center ">
         <ThemeToggler />
          <button className="inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground md:hidden">
          </button>
          <div className="hidden items-center gap-2 md:flex">
            <button className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
              Login
            </button>
            <button className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium transition-all duration-300 hover:opacity-80">
              <a target="_blank" rel="noopener noreferrer" href="https://harkirat.classx.co.in/new-courses">
                Join now
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
