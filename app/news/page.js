'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [stories, setStories] = useState([]);
  const [selectedOption, setSelectedOption] = useState('top');
  const [pageTitle, setPageTitle] = useState('Top News Articles');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url;

        if (selectedOption === 'new') {
          url = 'https://hacker-news.firebaseio.com/v0/newstories.json';
        } else {
          url = `https://hacker-news.firebaseio.com/v0/${selectedOption}stories.json`;
        }

        const response = await axios.get(url);
        const storyIds = response.data;

        if (!Array.isArray(storyIds)) {
          console.warn(`No story IDs found for ${selectedOption}stories`);
          setStories([]);
          return;
        }

        const storyPromises = storyIds.slice(0, 20).map(storyId =>
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(response => response.data)
        );

        Promise.all(storyPromises)
          .then(stories => {
            setStories(stories);
          })
          .catch(error => {
            console.error('Error fetching stories:', error);
          });
      } catch (error) {
        console.error(`Error fetching ${selectedOption} story IDs:`, error);
      }
    };

    fetchNews();
  }, [selectedOption]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    const title = option === 'top' ? 'Top News Articles' : option === 'new' ? 'Newest Articles' : 'Job Listings';
    setPageTitle(title);
    document.title = title; 
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <div className="news-container w-full max-w-6xl bg-white p-4 rounded-lg shadow-md my-6">
        <div className="flex justify-end mb-4">
          <button
            className={`option-button mr-4 ${selectedOption === 'top' ? 'selected font-medium' : ''}`}
            onClick={() => handleOptionChange('top')}
          >
            Top
          </button>
          <button
            className={`option-button ${selectedOption === 'new' ? 'selected font-medium' : ''}`}
            onClick={() => handleOptionChange('new')}
          >
            Newest
          </button>
          <button
            className={`option-button ml-4 ${selectedOption === 'job' ? 'selected font-medium' : ''}`}
            onClick={() => handleOptionChange('job')}
          >
            Jobs
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center">{pageTitle}</h1>
        <ol className="card-container w-[500px] flex flex-col items-start mx-auto gap-4 my-4">
          {stories.map((story, index) => (
            <li key={story.id} className="card flex items-center">
              <span className="card-number text-xl font-bold text-gray-500 pr-4">
                {index + 1}
              </span>
              <div className="card-content">
                <h2 className="card-title">{story.title}</h2>
                <p className="card-description">
                  <span style={{ color: '#FF6600' }}>{story.by ? `source: ${story.by}` : ''}</span> •
                  <span>{story.score} points</span> •
                  <span>{story.descendants || 0} comments</span>
                </p>
                <a href={story.url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                  Read More
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default NewsPage;