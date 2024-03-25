'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {

  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleStart = () => {
    if (!isChecked) return;
    router.push('/interview/peer-graded/start');
  }

  return (
    <div className="w-full h-[92vh] px-2 flex justify-center items-center">
      <div className="bg-light-1 max-w-[600px] rounded-lg shadow-lg px-10 py-14 flex flex-col items-center gap-5">
        <h1 className="font-medium">
          <span className="text-blue-500">User</span>, Welcome to Peer-graded
          Interview
        </h1>
        <ol className="pl-4">
          <li className="list-decimal">
            To minimize technical difficulties during the interview, please use a
            computer with a camera and microphone. Also, update to the latest
            version of Chrome. 
          </li>
          <li className=" list-decimal">
            To avoid technical difficulties during the
            interview, please perform equipment test prior to the interview.
          </li>
          <li className="list-decimal">
            During the interview, we may collect some data in order to provide you
            with better online interview services. 
          </li>
          <li className="list-decimal">
            There will be one question and you will be given 90 seconds to speak. It is preferred to answer the question in brief and meaningful way.
          </li>
        </ol>

        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsChecked(prev => !prev)}>
          <input type="checkbox" className="w-4 h-4 rounded-lg" checked={isChecked} onChange={() => {}}/>
          <p className={`${!isChecked && 'text-gray-2'}`}>I have carefully read and agree to the above content</p>
        </div>

        <div>
          <button 
            onClick={handleStart}
          className="bg-blue-500 text-light-1 rounded-lg px-3 py-2 disabled:cursor-not-allowed" disabled={!isChecked}>
            Start Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
