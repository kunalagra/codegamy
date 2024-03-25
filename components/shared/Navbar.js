import Link from 'next/link'
import React from 'react'
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import { getServerSession } from "next-auth/next"
import NavLinks from './NavLinks'

const Navbar = async () => {

  const session = await getServerSession(authOptions);
  const userID = session?.user?._id;
  return (
    <div className='w-full bg-light-1'>

      <div className='max-w-6xl mx-auto flex justify-between items-center px-2 py-3'>

        <div className='flex justify-between items-center gap-7'>
          <Link href='/'>
            <h2 className='font-bold text-xl'>
              CODEGAMY
            </h2>
          </Link>
          
            <NavLinks />
          </div>

        <div className='flex justify-between items-center gap-7'>
          {
            userID ? (
              <>
              <Link href='/profile'>
                Profile
              </Link>
              <Link href='/login'>
                Logout
              </Link>
              </>

            ) : (
              <><Link href='/login'>
                Login
              </Link>
                <Link href='/register'>
                  Register
                </Link></>
            )
          }
        </div>
      </div>


    </div>
  )
}

export default Navbar