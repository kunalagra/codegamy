'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {

  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(" ");

  async function fetchUserInfo() {
    try {
      const response = await axios.get("/api/getUserInfo");
      const data = response.data;
      setUsername(data.name? data.name : " ");
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  const handleStart = () => {
    if (!isChecked) return;
    setLoading(true);
    setTimeout(() => {
      router.push('/interview/peer-graded/start');
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    fetchUserInfo()
  }, []);

  return (
    <div className="w-full min-h-[72vh] px-2 flex justify-center items-center">
      <div className="max-w-2xl px-10 py-14 flex flex-col items-center gap-5">
        <h1 className="font-medium">
          <span className="text-blue-500">{username.split(' ')[0]}</span>, Welcome to Peer-graded
          Interview
        </h1>
        <ol className="pl-4 text-gray-700 my-5">
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
          className="w-[200px] bg-blue-500 text-light-1 rounded-xl px-3 py-2 disabled:cursor-not-allowed" disabled={!isChecked}>
            {loading? 
              <img src="/loader.svg" className="w-6 h-6 object-contain mx-auto" /> :
              "Start Interview"
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
