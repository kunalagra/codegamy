"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProfileSection() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await axios.get("/api/getUserInfo");
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }

    fetchUserInfo();
  }, []);

  const [userInfo, setUserInfo] = useState({
    username: "sultan",
    rankings: {
      problems: {
        total: 50,
        solved: 30,
        easy: {
          total: 20,
          solved: 15,
        },
        medium: {
          total: 20,
          solved: 10,
        },
        tough: {
          total: 10,
          solved: 5,
        },
      },
    },
    badges: [
      { name: "Guardian", image: "/guardian.jpeg" },
      { name: "January", image: "/january.jpg" },
      { name: "June", image: "/june.png" },
      { name: "July", image: "/july.png" },
      { name: "Knight", image: "/knight_badge.png" },
      { name: "Soldier", image: "/soldier.png" },
    ],
    age: 20,
    gender: "Male",
    college: "IIT Bombay",
    city: "Mumbai",
    country: "India",
    skills: {
      Advanced: [
        { name: "Dynamic Programming ", count: 1 },
        { name: "Divide and Conquer ", count: 1 },
      ],
      Intermediate: [
        { name: "Hash Table ", count: 2 },
        { name: "Math ", count: 2 },
        { name: "Depth-First Search ", count: 3 },
      ],
      Fundamental: [
        { name: "Array ", count: 4 },
        { name: "String ", count: 2 },
        { name: "Sorting ", count: 1 },
        { name: "Two Pointers ", count: 2 },
        { name: "Linked List ", count: 1 },
      ],
    },
  });

  useEffect(() => {
    renderLineChart();
  }, []);

  const renderLineChart = () => {
    const ratingsData = [
      1500, 1550, 1600, 1650, 1630, 1700, 1750, 1778, 1800, 1900, 2000,
    ];

    const chartData = {
      labels: ratingsData.map((_, index) => index + 1),
      datasets: [
        {
          label: "Contest Ratings",
          data: ratingsData,
          borderColor: "#3b82f6",
          tension: 0.4,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "Contest Number",
          },
        },
        y: {
          title: {
            display: true,
            text: "Contest Rating",
          },
        },
      },
    };

    const ctx = document.getElementById("contestRatingChart");
    if (ctx) {
      const existingChart = Chart.getChart(ctx);
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "line",
        data: chartData,
        options: chartOptions,
      });
    }
  };

  return (
    <div className="flex w-[90vw] max-w-6xl gap-2 px-3 py-2">  
      <div className="min-w-[400px] max-w-[400px]">
        <div className="bg-light-1 rounded-lg shadow-lg px-4 py-4 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            {data.name}
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Additional Info
          </h3>
          <div className="flex items-center mb-1">
            <div className="w-24 mr-2 font-medium">Age:</div>
            <div className="text-gray-800">{data.age}</div>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-24 mr-2 font-medium">Gender:</div>
            <div className="text-gray-800">{data.gender}</div>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-24 mr-2 font-medium">College:</div>
            <div className="text-gray-800">{data.college}</div>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-24 mr-2 font-medium">City:</div>
            <div className="text-gray-800">{data.city}</div>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-24 mr-2 font-medium">Country:</div>
            <div className="text-gray-800">{data.country}</div>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-24 mr-2 font-medium">Rating:</div>
            <div className="text-gray-800">{data.rating}</div>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-24 mr-2 font-medium">Amount:</div>
            <div className="text-gray-800">{data.amount}</div>
          </div>
          <Link href="/edit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
            Edit Profile
          </Link>
        </div>

        <div className="mt-2 bg-light-1 rounded-lg shadow-lg px-4 py-4">
          <h3 className="text-lg font-semibold text-dark-1 mb-2">Skills</h3>
          {Object.entries(userInfo.skills).map(([category, skills]) => (
            <div key={category} className="mb-4">
              <h4 className="text-md font-semibold text-dark-1 mb-2">
                {category}
              </h4>
              <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                  <li key={index}>
                    {skill.name}x{skill.count}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      <div className="flex-grow max-w-[70vw]">
        <div className="p-6 flex flex-col gap-3">
          <div className="w-full h-[390px] bg-white shadow-md rounded-lg p-6">
            <canvas id="contestRatingChart"></canvas>
          </div>
              
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="mb-5">Solved Problems</h2>
            <div className="flex gap-8 items-center justify-center w-full mb-5">
              <div className="bg-light-4 rounded-full h-[100px] w-[100px] p-2">
                <div className="bg-light-2 rounded-full h-full w-full flex flex-col justify-center items-center">
                  <h1 className="font-medium">490</h1>
                  <p>Solved</p>
                </div>
              </div>

              <div className="flex items-center justify-between ">
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <div className="w-24 mr-2">Easy:</div>
                    <div className="flex flex-1 bg-gray-200 h-4 rounded flex-grow w-[700px]">
                      <div
                        className="bg-green-500 h-full rounded-full"
                        style={{
                          width: `${
                            (userInfo.rankings.problems.easy.solved /
                              userInfo.rankings.problems.easy.total) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-24 mr-2">Medium:</div>
                    <div className="flex flex-1 bg-gray-200 h-4 rounded flex-grow">
                      <div
                        className="bg-yellow-500 h-full rounded-full"
                        style={{
                          width: `${
                            (userInfo.rankings.problems.medium.solved /
                              userInfo.rankings.problems.medium.total) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-24 mr-2">Tough:</div>
                    <div className="flex flex-1 bg-gray-200 h-4 rounded flex-grow">
                      <div
                        className="bg-red-500 h-full rounded-full"
                        style={{
                          width: `${
                            (userInfo.rankings.problems.tough.solved /
                              userInfo.rankings.problems.tough.total) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>

          <div className="flex justify-between">
            <div className="flex-grow max-w-full bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">
                Badges
              </h3>
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={true}
                containerClass="carousel-container"
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={true}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 2,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                showDots={false}
                slidesToSlide={1}
                swipeable
              >
                {userInfo.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center h-40 gap-10"
                  >
                    <img
                      src={badge.image}
                      alt={badge.name}
                      className="w-32 h-32 object-contain rounded-full my-auto"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="w-1/3 pl-6">{/* Contest Rankings */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
