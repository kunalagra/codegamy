import Link from 'next/link'
import React from 'react'

const ContestCard = ({ contestId, contestUrl, isUpcoming=false, isOngoing }) => {
  return (
    <Link href={`/contests/${contestUrl}`} className='w-full flex justify-between items-center bg-light-2 rounded-full group pl-4 pr-10 py-2 hover:bg-dark-1 transition-all ease-in'>
        <div className='flex items-center gap-4'>
            <div className='flex'>
                <div className='bg-light-4 p-2 rounded-full group-hover:bg-dark-3 transition-all ease-in'>
                    <img 
                        src='/prize.png'
                        alt='contest-icon'
                        className='w-14 h-14 object-contain rounded-full'
                    />
                </div>
                <div className='my-auto ml-[-10px]'>
                    <div className='py-2 pl-5 pr-7 bg-light-3 group-hover:text-white rounded-r-full group-hover:bg-dark-3 transition-all ease-in'>
                        <h2>Weekly Contest {contestId}</h2>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <img
                    src='/timer.png'
                    alt='clock-icon'
                    className='w-4 h-4 object-contain'
                />
                { isUpcoming? (
                    <div className=''>
                        <p className='text-sm text-gray-700 group-hover:text-gray-300 transition-all ease-in'>
                            Starts in 2d 16h 55m 34s
                        </p>
                        <p className='font-medium text-sm text-gray-700 group-hover:text-gray-300 transition-all ease-in'>
                            Sunday 8:00 AM
                        </p>
                    </div>
                ) : isOngoing? (
                    <p className='text-sm text-gray-700 group-hover:text-gray-300 transition-all ease-in'>
                        Ends in 1h 15m 08s
                    </p>
                ) : (
                    <p className='text-sm text-gray-700 group-hover:text-gray-300 transition-all ease-in'>
                        Ended on Feb 24, 2024 8:00 AM
                    </p>
                )}
            </div>
        </div>
        { isUpcoming && (
            <div>
                <button className='bg-light-4 group-hover:bg-dark-3 p-3 rounded-full transition-all ease-in'>
                    <img
                        src='/calendar.png'
                        alt='clock-icon'
                        className='w-5 h-5 object-contain'
                    />
                </button>
            </div>
        )}
    </Link>
  )
}

export default ContestCard