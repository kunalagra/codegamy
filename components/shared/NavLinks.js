'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {

    const pathname = usePathname();

  return (
    <div className="flex gap-3 bg-light-2 rounded-full">
      <Link href="/learn" 
        className={`py-2 px-6 font-medium ${pathname==='/learn' && 'bg-dark-1 text-white rounded-full'}`}>
          Learn
      </Link>
      <Link href="/problems" 
        className={`py-2 px-6 font-medium ${pathname==='/problems' && 'bg-dark-1 text-white rounded-full'}`}>
          Problems
      </Link>
      <Link href="/contests" 
        className={`py-2 px-6 font-medium ${pathname==='/contests' && 'bg-dark-1 text-white rounded-full'}`}>
          Contest
      </Link>
      <Link href="/interview" 
        className={`py-2 px-6 font-medium ${pathname==='/interview' && 'bg-dark-1 text-white rounded-full'}`}>
          Interview
      </Link>
      <Link href="/news" 
        className={`py-2 px-6 font-medium ${pathname==='/news' && 'bg-dark-1 text-white rounded-full'}`}>
          News
      </Link>
    </div>
  );
};

export default NavLinks;
