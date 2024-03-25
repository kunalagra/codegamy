import Link from 'next/link'
import React from 'react'

const ContestCard = ({ contestId, contestUrl, isUpcoming=false, isOngoing }) => {
  return (
    <Link href={`/contests/${contestUrl}`} className='w-full flex justify-between items-center bg-light-2 rounded-r-full group pl-4 pr-10 py-2'>
        <div className='flex items-center gap-4'>
            <div className='flex'>
                <div className='bg-light-3 p-2 rounded-full'>
                    <img 
                        src='/prize.png'
                        alt='contest-icon'
                        className='w-14 h-14 object-contain rounded-full'
                    />
                </div>
                <div className='my-auto ml-[-10px]'>
                    <div className='py-2 pl-5 pr-7 bg-light-3 group-hover:text-blue-500 rounded-r-full'>
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
                        <p className='text-sm'>
                            Starts in 2d 16h 55m 34s
                        </p>
                        <p className='font-medium text-sm'>
                            Sunday 8:00 AM
                        </p>
                    </div>
                ) : isOngoing? (
                    <p className='text-sm'>
                        Ends in 1h 15m 08s
                    </p>
                ) : (
                    <p className='text-sm'>
                        Ended on Feb 24, 2024 8:00 AM
                    </p>
                )}
            </div>
        </div>
        { isUpcoming && (
            <div>
                <button className='bg-light-3 hover:bg-light-4 p-2 rounded-lg'>
                    <img
                        src='/calendar.png'
                        alt='clock-icon'
                        className='w-6 h-6 object-contain'
                    />
                </button>
            </div>
        )}
    </Link>
  )
}

export default ContestCard