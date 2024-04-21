'use client'

import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [assignedInterviews, setAssignedInterviews] = useState(null);
    const [interviews, setInterviews] = useState(null);
    const [interviewDetails, setInterviewDetails] = useState(null);
    const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
    const [feedback, setFeedback] = useState({ rating: 3, comment: "" });
    const [submitted, setSubmitted] = useState(false);
    const [isAssigned, setIsAssigned] = useState(false);

    const fetchInterviews = async () => {
        const res = await fetch('/api/getMyVideos');
        const data = await res.json();
        setInterviews(data);
    }

    const fetchAssignedInterviews = async () => {
        const res = await fetch('/api/getAssigned');
        const data = await res.json();
        setAssignedInterviews(data);
    }

    const handleSubmitReview = async () => {
        
        await axios.post('/api/submitReview', {
            queueID: interviewDetails._id,
            rating: feedback.rating,
            comment: feedback.comment
        });
        setSubmitted(true);
        setTimeout(() => {setSubmitted(false); setIsInterviewModalOpen(false);}, 2000);
    }

    const handleFeedback = async (i, fb) => {
        await axios.post('/api/reviewFeedback', {
            reviewID: interviewDetails.reviews[i]._id,
            feedback: fb
        });
        setInterviewDetails({...interviewDetails, reviews: [...interviewDetails.reviews.slice(0,i), {...interviewDetails.reviews[i], feedback: fb}, ...interviewDetails.reviews.slice(i+1)]});
    }

    function deadlineFormat(dateTime) {
        const now = new Date();
        const diff = Math.abs(now - dateTime) / 1000;
    
        const days = Math.floor(diff / 86400); 
        const hours = Math.floor((diff % 86400) / 3600); 
        const minutes = Math.floor(((diff % 86400) % 3600) / 60);
    
        return `${days}d ${hours}h ${minutes}m`;
    }

    function formatDateTime(dateTime) {
        const options = { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDateTime = dateTime.toLocaleDateString('en-US', options);
        
        const day = dateTime.getDate();
        const suffix = (day === 1 || day === 21 || day === 31) ? 'st' : (day === 2 || day === 22) ? 'nd' : (day === 3 || day === 23) ? 'rd' : 'th';
        
        return formattedDateTime.replace(/\b\d{1,2}\b/, day + suffix);
    }
    

    useEffect(() => {
        fetchAssignedInterviews();
        fetchInterviews();
    }, []);

  return (
    <>
        <div className='w-full max-w-6xl flex flex-col gap-10 px-2 mx-auto pt-5 pb-10'>
            <div className=''>
                <h1 className='font-medium mb-3'>
                    Create an Interview
                </h1>
                <div className='flex gap-10 flex-wrap'>
                    <Link href="/interview/peer-graded" className='w-[300px] flex flex-col items-center gap-2 text-white rounded-3xl shadow-xl bg-blue-500 py-14 text-center hover:bg-blue-600 hover:scale-[1.03] transition-all ease-in'>
                        <img 
                            src='/p2p.png'
                            alt="p2p"
                            className='object-contain w-14 h-14'
                        />
                        <p>Peer-graded Interview</p>
                    </Link>
                    <Link href="/interview/professional" className='w-[300px] flex flex-col items-center gap-2 text-white rounded-3xl shadow-xl bg-blue-500 py-14 text-center hover:bg-blue-600 hover:scale-[1.03] transition-all ease-in'>
                        <img 
                            src='/professional.png'
                            alt="professional"
                            className='object-contain w-14 h-14'
                        />
                        <p>Professional Interview</p>
                    </Link>
                </div>
            </div>

            <div>
                <h1 className='font-medium mb-3'>
                    Past Interviews
                </h1>
                <div className='w-full flex gap-10 flex-wrap'>
                    {interviews && interviews.length > 0? (
                        interviews.map((interview, index) => (
                            <div key={index} onClick={() => {setInterviewDetails(interview); setIsInterviewModalOpen(true); setIsAssigned(false);}}
                            className='w-[340px] flex flex-col items-center gap-2 text-white rounded-3xl shadow-xl bg-gray-500 py-14 text-center hover:bg-gray-600 hover:scale-[1.03] transition-all ease-in cursor-pointer'>
                                <img 
                                    src='/interview.png'
                                    alt="interview"
                                    className='object-contain w-14 h-14'
                                />
                                <p>{`My Interview - ${index+1}`}<br/>{`Submitted: ${formatDateTime(new Date(interview.submissionTime))}`}</p>
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-2'>No interviews found</p>
                    )}
                </div>
            </div>

            <div>
                <h1 className='font-medium mb-3'>
                    Assigned Interviews
                </h1>
                <div className='w-full flex gap-10 flex-wrap'>
                    {assignedInterviews && assignedInterviews.assigned && assignedInterviews.assigned.length > 0? (
                        assignedInterviews.assigned.map((interview, index) => (
                            <div key={index} onClick={() => {setInterviewDetails(interview); setIsInterviewModalOpen(true); setIsAssigned(true);}}
                            className='w-[330px] flex flex-col items-center gap-2 text-white rounded-3xl shadow-xl bg-gray-700 py-14 text-center hover:bg-gray-800 hover:scale-[1.03] transition-all ease-in cursor-pointer'>
                                <img 
                                    src='/assignment.png'
                                    alt="assignment"
                                    className='object-contain w-14 h-14'
                                />
                                <p>{`Assigned interview - ${index+1}`}<br/>{`Deadline: ${deadlineFormat(new Date(new Date(assignedInterviews.assignedTime[index]).getTime() + 2 * 24 * 60 * 60 * 1000))}`}</p>
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-2'>No interviews found</p>
                    )}
                </div>
            </div>
        </div>


        { isInterviewModalOpen && (
            <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
                <div className='bg-light-1 w-[600px] max-h-[92vh] px-10 py-12 shadow-lg mx-auto rounded-xl overflow-y-auto'>
                    <div className='w-full text-right cursor-pointer mb-4'>
                        <p onClick={() => setIsInterviewModalOpen(false)}>Close</p>
                    </div>
                    {isAssigned? (
                        
                        <div className='flex flex-col gap-5 items-center'>
                            <p className='font-semibold'>Q: {interviewDetails.peerVideo.question.question}</p>
                            <video
                                src={`/assets/${interviewDetails.peerVideo.videoUrl}`}
                                controls
                                loop
                                controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                                className="w-full h-auto"
                            />
                            <div className="w-full">
                                <p>Rating</p>
                                <div className='flex items-center gap-1'>
                                    {[1,2,3,4,5].map((i) => (
                                        <img
                                            src={`${feedback.rating >= i? '/star_fill.svg' : '/star_outline.svg'}`}
                                            alt=""
                                            className={`${feedback.rating >= i? 'w-5 h-5' : 'w-4 h-4'} object-contain cursor-pointer`}
                                            onClick={() => setFeedback({...feedback, rating: i})}
                                            key={i}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className='w-full'>
                                <p>Comment</p>
                                <textarea 
                                    className='w-full rounded-lg p-2 bg-light-3 resize-none'
                                    rows={5}
                                    value={feedback.comment}
                                    onChange={(e) => setFeedback({...feedback, comment: e.target.value})}
                                />
                            </div>

                            <button onClick={handleSubmitReview} className="text-light-1 bg-blue-500 py-2 px-3 rounded-lg">
                                Submit Review
                            </button>
                        </div>
                    ) : (

                        <div className='flex flex-col gap-5 items-center'>
                            {typeof(interviewDetails.reviews)==='string' && <h2 className='font-medium'>Feedback isn't given yet!</h2>}
                            <p className='font-semibold'>Q: {interviewDetails.question.question}</p>
                            <video
                                src={`/assets/${interviewDetails.videoUrl}`}
                                controls
                                loop
                                controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                                className="w-full h-auto"
                            />
                            {Array.isArray(interviewDetails.reviews) && interviewDetails.reviews.map((review, index) => (
                                <div className='w-full flex flex-col gap-2 border-t-2 border-light-4 pt-3' key={index}>
                                    <h2 className='font-medium'>User {index+1}</h2>    
                                    <div className="w-full">
                                        <p className='font-medium'>Rating</p>
                                        <div className='flex items-center gap-1'>
                                            {review && [1,2,3,4,5].map((i) => (
                                                <img
                                                    src={`${review.rating >= i? '/star_fill.svg' : '/star_outline.svg'}`}
                                                    alt=""
                                                    className={`${review.rating >= i? 'w-5 h-5' : 'w-4 h-4'} object-contain`}
                                                    key={i}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <p className='font-medium'>Comment</p>
                                        <textarea 
                                            className='w-full rounded-lg bg-light-3 p-2 resize-none'
                                            rows={5}
                                            value={review.comment}
                                            disabled
                                        />
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <button 
                                            onClick={() => handleFeedback(index,1)}
                                            className={`${review.feedback===1? 'text-light-1 bg-blue-500' : 'text-blue-500 border border-blue-500'} py-2 px-3 rounded-lg`}>
                                            Helpful!
                                        </button>
                                        <button 
                                            onClick={() => handleFeedback(index,-1)}
                                            className={`${review.feedback===-1? 'text-light-1 bg-red-500' : 'text-red-500 border border-red-500'} py-2 px-3 rounded-lg`}>
                                            Not Helpful!
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </div>
        )}

      {submitted && (
        <div className='fixed top-5 right-5 bg-green-300 shadow-lg rounded-lg py-3 px-5'>
          Successfully submitted
        </div>
      )}
    </>
  )
}

export default page