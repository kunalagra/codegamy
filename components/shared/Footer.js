import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mt-12 w-full flex p-4'>
        <div className='max-w-6xl w-full flex justify-between items-center mx-auto max-md:justify-center max-md:flex-col gap-5'>
            <p className='max-sm:justify-center'>2024 © Codegamy | All Rights Reserved.</p>
            <div className='flex gap-1 items-end max-sm:justify-center'>
                <p>Developed by <b>QUAD ❤️</b></p>
                <Link href='https://github.com/kunalagra/codegamy' target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-5 h-5 text-gray-700 hover:text-gray-500 cursor-pointer" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer