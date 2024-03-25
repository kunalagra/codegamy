'use client'

import { useEffect, useState } from 'react';
import VideoInterview from './VideoInterview';

const page = () => {

    const [questions, setQuestions] = useState([]);

    const helper = async () => {
        const res = await fetch('/api/getQuestions');
        const questions = await res.json();
        setQuestions([...questions]);
    }

    useEffect(() => {
        helper();
    }, []);


  return (
    <div className='w-full h-[92vh] max-w-6xl px-2 mx-auto pt-6'>
        
        <VideoInterview questions={questions} />
    </div>
  )
}

export default page