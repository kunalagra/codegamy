'use client'

import React, { useState } from 'react'

const Modules = ({modules, setData}) => {

    const [open, setOpen] = useState(false);

    const handleModuleClick = (module) => {
        console.log(module);
        const data = module;
        setData(data);
    }

    return (
        <div>
            <div className={`md:hidden my-4 ${open && 'hidden'}`}>
                <img
                    src='/menu.png'
                    alt='menu'
                    className='w-8 h-8 object-contain cursor-pointer'
                    onClick={() => setOpen(true)}
                />
            </div>
            <div className={`w-full max-w-[350px] flex flex-col overflow-y-auto max-md:absolute max-md:bg-white z-10 ${!open && 'max-md:hidden'}`}>
                <div 
                    className="px-4 py-4 flex justify-between items-center cursor-pointer"
                    onClick={() => setOpen(false)}
                >
                    <h1>
                        Modules
                    </h1>
                    <img
                        src='/menu.png'
                        alt='menu'
                        className='w-8 h-8 object-contain md:hidden'
                    />
                </div>
                {modules.map((module, index) => (
                    <div key={index} className="rounded-2xl m-2 border-2 border-gray-50">
                        <div className="bg-gray-600 text-white rounded-t-2xl p-3 flex flex-col justify-center gap-2">
                            <h1 className="text-base font-semibold">{module.title}</h1>
                        </div>
                        <div className="flex flex-col ml-4">
                            {module.lessons.map((lesson, index) => (
                                <div key={index} className=" p-2 flex flex-row items-center gap-2 text-xs">
                                    <span className="min-w-[60px] font-semibold">Lesson {index + 1}</span>
                                    <span onClick={() => handleModuleClick(lesson.content)} className="flex-grow cursor-pointer text-blue-500 break-words">
                                        {lesson.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Modules