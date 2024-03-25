
'use client'
import React, { useEffect, useState } from 'react';
import { AiOutlineSolution } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { useRouter } from 'next/navigation';
import { mockProblemsData } from '@/constants';

const Problems = () => {
    const router = useRouter();
    const [problems, setProblems] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState('');

    useEffect(() => {
        const fetchProblems = async () => {
            const response = await fetch('/api/getAllProblems');
            const data = await response.json();
            setProblems(data);
        }
        fetchProblems();
    }, []);

    const difficultyColors = {
        'Hard' : 'bg-red-500' ,
        'Medium': 'bg-orange-500' ,
        'Easy': 'bg-green-500'
    };

    const openVideoPopup = (videoUrl) => {
        setSelectedVideo('8-k1C6ehKuw');
    };

    const closeVideoPopup = () => {
        setSelectedVideo('');
    };

    return (
        <div>
            <div className="p-10">
                <div className="relative overflow-x-auto sm:rounded-lg shadow-lg">
                    <table className="w-full text-sm text-left rtl:text-right ">
                        <thead className="text-xs text-gray-500 uppercase bg-light-3">
                            <tr>
                                <th scope="col" className="p-4">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Problem Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Difficulty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Solution
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Video Solution
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {problems.map((problem, index) => (
                                <tr key={index} className="bg-light-2 hover:bg-light-4">
                                    <td className="w-4 p-4">
                                        <div>
                                            <ImCheckboxChecked size={20} color={'green'}/>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 hover:text-blue-500 hover:cursor-pointer font-medium whitespace-nowrap">
                                        <div onClick={() => {
                                            router.push(`/problems/${problem.id}`);
                                        }}>
                                            {problem.order}. {problem.title}
                                        </div>
                                    </th>
                                    <td>
                                        <div className={`w-fit mx-auto px-3 py-1 rounded-full hover:cursor-pointer text-sm text-light-1 ${difficultyColors[problem?.difficulty]}`}>
                                            {problem.difficulty}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {problem.category}
                                    </td>
                                    <td className="px-6 py-4 cursor-pointer">
                                        <AiOutlineSolution color={'blue'} size={24} onClick={() => openVideoPopup(problem.videoId)} />
                                    </td>
                                    <td className="px-6 py-4 cursor-pointer">
                                        <ImYoutube2 color={'red'} size={35} onClick={() => openVideoPopup(problem.videoId)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedVideo && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg flex flex-col items-end gap-2">
                        <button onClick={closeVideoPopup} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                            Close
                        </button>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${selectedVideo}`}
                            title="YouTube Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Problems;