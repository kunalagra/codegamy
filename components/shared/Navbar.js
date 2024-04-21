import Link from 'next/link'
import React from 'react'
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import { getServerSession } from "next-auth/next"
import NavLinks from './NavLinks'
import Image from 'next/image'
import NavMenu from './NavMenu'

const Navbar = async () => {

  const session = await getServerSession(authOptions);
  const userID = session?.user?._id;
  
  return (
    <div className='w-full bg-light-1'>

      <div className='max-w-6xl mx-auto flex justify-between items-center px-2 py-6'>

        <Link href='/' className='flex justify-center items-center gap-3 '>
          <img
            src='/logo.png'
            alt='codegamy_logo'
            className='w-8 h-8 object-contain'
          />
          <h2 className='font-bold text-2xl'>
            CODEGAMY
          </h2>
        </Link>
        
        <NavLinks user={userID} />

        <div className='flex items-center gap-3'>

          <Link href={userID? '/profile' : '/login'}>
            <img 
              src='/profile.png'
              alt='profile'
              className='w-10 h-10 max-sm:w-8 max-sm:h-8 object-contain'
            />
          </Link>

          <NavMenu user={userID} />
        </div>
      </div>


    </div>
  )
}

export default Navbar