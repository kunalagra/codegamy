"use client";
import Workspace from '@/components/workspace/Workspace'
import { mockProblemsData } from '@/constants'
import React, { useEffect, useState } from 'react'

const page = () => {

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      const response = await fetch('/api/getAllProblems');
      const data = await response.json();
      setProblems(data);
    }
    fetchProblems();
  } , []);

  return (
    <>
        <Workspace problems={problems} />
    </>
  )
}

export default page