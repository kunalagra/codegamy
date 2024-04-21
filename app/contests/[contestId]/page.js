"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();

  const prizes = [
    { pos: '1st', points: 2000 },
    { pos: '2nd', points: 1000 },
    { pos: '3rd', points: 500 },
    { pos: '4 - 50th', points: 100 },
    { pos: '51 - 100th', points: 50 },
    { pos: 'Participate', points: 5 },
    { pos: 'First Time Participant', points: 50 }
  ];

  const problems = [
    { title: 'Apple Redistribution into Boxes', score: 3 },
    { title: 'Maximize Happiness of Selected Children', score: 4 },
    { title: 'Shortest Uncommon Substring in an Array', score: 5 },
    { title: 'Maximum Strength of K Disjoint Subarrays', score: 6 },
  ];

  const rankings = [
    { username: 'john_doe', score: 18, finish_time: '0:15:16' },
    { username: 'john_doe', score: 18, finish_time: '0:15:16' },
    { username: 'john_doe', score: 18, finish_time: '0:15:16' },
    { username: 'john_doe', score: 18, finish_time: '0:15:16' },
    { username: 'john_doe', score: 18, finish_time: '0:15:16' },
  ];

  const isUpcoming = false;
  const isOngoing = true;

  return (
    <div className="w-full flex flex-col gap-5 max-w-6xl mx-auto px-2 mt-3 mb-10">
      <div>
        <Link href="/contests" className="font-semibold text-gray-400">
         ⯇ Back to Contests
        </Link>
      </div>

      <div className="flex gap-5 max-md:flex-col max-md:items-center">
        <div className="flex-grow">
          <div className={`flex border ${isUpcoming? 'border-blue-500' : isOngoing? 'border-green-500' : 'border-light-4'} rounded-lg mb-5`}>
            <div className={`${isUpcoming? 'bg-blue-500' : isOngoing? 'bg-green-500' : 'bg-light-4'} w-5 rounded-l-lg`} />
            <div className="w-full py-5 flex justify-between mx-5">
              {isUpcoming? (
                <p>This contest will start in 2d 5m 16h 34s</p>
              ) : isOngoing? (
                <p>This contest will end in 1h 5m 34s</p>
              ) : (
                <p>This contest has ended</p>
              )}
              { isUpcoming && (
                <Link href='/' className="flex items-center gap-3">
                  <img
                    src="/google.png"
                    alt="trophy-icon"
                    className="w-5 h-5 object-contain"
                  />
                  <p className="text-blue-500">Add to Google Calendar</p>
                </Link>
              )}
            </div>
          </div>

          <div className="bg-light-3 rounded-r-full pl-4 pr-10 py-4 mb-5 w-fit">
            <h1 className="text-2xl">Weekly Contest {params.contestId.slice(15)}</h1>
          </div>

          <h2 className="my-2">Rules:</h2>
          <ul>
            <li>There will be four problems in the contest and each will have its own difficulty level.</li>
            <li>The penalty time of 5 minutes will be applied for each wrong submission.</li>
            <li>To ensure the fairness of the contest, Codegamy will hide some
              test cases during the contest. When users submit incorrect
              submissions, Codegamy will not show the hidden test cases to the
              users.</li>
            <li>The final rating of this contest will be updated within 5 working
              days after the contest.</li>
          </ul>
        </div>

        <div className="w-full max-w-[300px] bg-light-2 rounded-lg h-fit shadow-lg pb-2">
          <div className="flex items-center gap-3 bg-light-3 pt-4 pb-3 px-6 rounded-t-lg">
            <img
              src="/prize.png"
              alt="trophy-icon"
              className="w-7 h-7 object-contain"
            />
            <h2>Prize</h2>
          </div>
          <div className="w-full mt-3 px-6">
            {prizes.map((prize,index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <p className="font-medium">{prize.pos}</p>
                <div className="flex items-center gap-1">
                  {prize.points}
                  <img 
                      src='/coin.png'
                      alt='contest-icon'
                      className='w-4 h-4 object-contain rounded-full'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {isUpcoming && (
        <div className="mt-10 flex items-center gap-5">
          <p>You have not registered yet.</p>
          <button className="bg-green-500 hover:bg-green-600 text-light-1 px-4 py-2 rounded-lg transition-all">
            Register Now
          </button>
        </div>
      )}

      {!isUpcoming && (
        <div className="mt-10 flex items-start gap-5 max-md:flex-col">
          <div className="w-full border border-light-3 rounded-lg hover:shadow-lg transition-all">
            <div className="bg-light-3 flex justify-between items-center px-4 py-2.5 rounded-t-lg">
              <p className="font-medium max-xs:text-sm">Problem list</p>
              <p className="font-medium max-xs:text-sm">Score</p>
            </div>
            {problems.map((prob, index) => (
              <Link key={index} href={`/contests/${params.contestId}/${prob.title.toLowerCase().split(' ').join('-')}`}
                className="flex justify-between items-center px-4 py-2.5 group cursor-pointer hover:bg-light-2 border-t border-light-3"
              >
                <p className="text-sm group-hover:text-blue-500">
                  {prob.title}
                </p>
                <p className="text-sm bg-gray-400 text-light-1 py-0.5 px-2 rounded-lg">{prob.score}</p>
              </Link>
            ))}
          </div>

          <div className="w-full border border-light-3 rounded-lg hover:shadow-lg transition-all">
            <div className="bg-light-3 px-4 py-2.5 rounded-t-lg">
              <p className="font-medium">Ranking</p>
            </div>

            <div className="flex bg-light-2 px-4 py-2.5">
              <p className="w-[15%] font-medium max-xs:text-sm text-center">Rank</p>
              <p className="w-[40%] font-medium max-xs:text-sm text-center">Name</p>
              <p className="w-[15%] font-medium max-xs:text-sm text-center">Score</p>
              <p className="w-[30%] font-medium max-xs:text-sm text-center">Finish Time</p>
            </div>

            {rankings.map((ranking, index) => (
              <div key={index} className="flex bg-light-1 px-4 py-2.5 hover:bg-light-2 border-b border-light-3">
                <p className="text-sm w-[15%] text-center">{index+1}</p>
                <Link href={`/profile/${ranking.username}`} className="text-sm w-[40%] hover:text-blue-500 text-center">
                  {ranking.username}
                </Link>
                <p className="text-sm w-[15%] text-center">{ranking.score}</p>
                <p className="text-sm w-[30%] text-center">{ranking.finish_time}</p>
              </div>
            ))}

            <div className="hover:bg-light-2 text-center rounded-b-lg flex">
              <Link 
                href={`/contests/${params.contestId}/ranking`} 
                className="w-full text-blue-500 py-3"
              >
                More...
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
