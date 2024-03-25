import React from 'react'

const Modules = ({modules, setData}) => {

    const handleModuleClick = (module) => {
        console.log(module);
        const data = module;
        setData(data);
    }

    return (
        <div className="min-w-[350px] max-w-[350px] flex flex-col overflow-y-auto">
            <div className="px-4 py-4 text-lg cursor-pointer font-semibold">
                Modules
            </div>
            {modules.map((module, index) => (
                <div key={index} className="rounded-2xl m-2 border-2 border-gray-50">
                    <div className="bg-gray-100 rounded-t-2xl p-3 flex flex-col justify-center gap-2">
                        <h1 className="text-base font-semibold">{module.title}</h1>
                        <p className="text-sm">{module.desc}</p>
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
        
    )
}

export default Modules