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
    <div className='w-full min-h-[72vh] max-w-6xl px-2 py-12 mx-auto flex items-center justify-center'>
        
        <VideoInterview questions={questions} />
    </div>
  )
}

export default page