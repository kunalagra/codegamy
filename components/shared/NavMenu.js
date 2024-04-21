'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavMenu = ({ user }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <img
        src="/menu.png"
        alt="menu"
        className={`w-10 h-10 max-sm:w-8 max-sm:h-8 object-contain cursor-pointer ${
          open && "hidden"
        }`}
        onClick={() => setOpen(true)}
      />
      <div className={`${!open && 'hidden'}`}>
        <div className={`flex flex-col absolute z-10 top-5 right-2 w-[300px] bg-light-2 p-3 rounded-xl shadow-xl`}>
            <img
                src="/menu.png"
                alt="menu"
                className={`w-10 h-10 max-sm:w-8 max-sm:h-8 object-contain cursor-pointer ml-auto mb-6`}
                onClick={() => setOpen(false)}
            />
            <Link
            href={user ? "/learn" : "/login"}
            className={`py-2 px-6 font-medium ${
                (pathname === "/learn" || pathname.startsWith("/courses")) &&
                "bg-dark-1 text-white rounded-full"
            }`}
            onClick={() => setOpen(false)}
            >
            Learn
            </Link>
            <Link
            href={user ? "/problems" : "/login"}
            className={`py-2 px-6 font-medium ${
                pathname === "/problems" && "bg-dark-1 text-white rounded-full"
            }`}
            onClick={() => setOpen(false)}
            >
            Problems
            </Link>
            <Link
            href={user ? "/contests" : "/login"}
            className={`py-2 px-6 font-medium ${
                pathname === "/contests" && "bg-dark-1 text-white rounded-full"
            }`}
            onClick={() => setOpen(false)}
            >
            Contest
            </Link>
            <Link
            href={user ? "/interview" : "/login"}
            className={`py-2 px-6 font-medium ${
                pathname === "/interview" && "bg-dark-1 text-white rounded-full"
            }`}
            onClick={() => setOpen(false)}
            >
            Interview
            </Link>
            <Link
            href={user ? "/news" : "/login"}
            className={`py-2 px-6 font-medium ${
                pathname === "/news" && "bg-dark-1 text-white rounded-full"
            }`}
            onClick={() => setOpen(false)}
            >
            News
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
