'use client'

import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import Webcam from "react-webcam";

const Timer = ({ hasStarted, minutes, setMinutes, seconds, setSeconds }) => {

  const handleDecimal = (num) => {
    return num < 10? '0' + num : num;
  }

  useEffect(() => {
    let interval;

    if (hasStarted && (seconds > 0 || minutes > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) 
          setSeconds((prevSeconds) => prevSeconds - 1);
        else {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [hasStarted, minutes, seconds]);

  return (
    <div className="text-right mb-2">
      <p>Time remaining - <span className="font-medium">{handleDecimal(minutes)}:{handleDecimal(seconds)}</span></p>
    </div>
  )
}


const VideoInterview = ({ questions }) => {

  const [attempted, setAttempted] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const router = useRouter();

  const blobUrlToFile = async (blobUrl) => {
    setSubmitted(true);
    const file = await fetch(blobUrl).then(r => r.blob()).then(blobFile => new File([blobFile], 'interview.mp4', { type: blobFile.type }));
    const formData = new FormData();
    formData.append('video', file);
    formData.append('id', questions[0].id);
    await axios.post('/api/submitVideo', formData).then(() => {
      setSubmitted(false); router.push('/interview');
    });
  };
  const ReactMediaRecorder = dynamic(() => import('react-media-recorder-2').then((mod) => mod.ReactMediaRecorder), {
    ssr: false,
  });

  return (
    <>
      <div>
        
        <ReactMediaRecorder
          video
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
            const recording = status === "recording";
            const stopped = status === "stopped";
            const idle = status === "idle";

            if (minutes===0 && seconds===0) {
              stopRecording();
            }

            return (
              <div className="flex flex-col items-center gap-6 w-[650px] mx-auto">
                <div className="flex flex-col gap-2">
                  {questions.map((question, index) => (
                    <h2 key={index} className="font-medium">
                      {question.question}
                    </h2>
                  ))}
                </div>
                <div>
                  
                  <Timer 
                    hasStarted={hasStarted} 
                    minutes={minutes}
                    setMinutes={setMinutes}
                    seconds={seconds}
                    setSeconds={setSeconds}  
                  />
                  
                  {recording? (
                    <Webcam className="w-full h-auto" />
                  ) : stopped? (
                    <video
                      src={mediaBlobUrl}
                      controls
                      loop
                      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="w-[650px] h-[450px] bg-black" />
                  )}
                </div>

                <div className="w-full flex gap-8 items-center">
                  {attempted < 2 && (idle || stopped) && (
                    <button
                      onClick={() => {
                        startRecording();
                      }}
                      className="w-full bg-blue-500 text-light-1 px-3 py-2 rounded-xl"
                    >
                      {attempted === 0 ? "Start" : "Retake"}
                    </button>
                  )}
                  {!(idle || stopped) && (
                    <button
                      onClick={() => stopRecording()}
                      className="w-full bg-blue-500 text-light-1 px-3 py-2 rounded-xl"
                    >
                      Stop
                    </button>
                  )}
                  {stopped && attempted > 0 && (
                    <button
                      onClick={() => {
                        blobUrlToFile(mediaBlobUrl);
                      }}
                      className="w-full bg-blue-500 text-light-1 px-3 py-2 rounded-xl"
                    >
                      Finish
                    </button>
                  )}
                </div>
              </div>
            );
          }}
          onStart={() => {setHasStarted(true); setAttempted((prev) => prev + 1)}}
          onStop={(mediaBlobUrl) => {setHasStarted(false); setMinutes(1); setSeconds(30);}}
        />
      </div>
      {submitted && (
        <div className='fixed top-5 right-5 bg-green-300 shadow-lg rounded-lg py-3 px-5'>
          Successfully submitted
        </div>
      )}
    </>
  );
};

export default VideoInterview;
