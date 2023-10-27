import "./stories.scss"
import React, { useState, useEffect } from 'react';
import { dummy } from "./import";


const Stories = () => {
      const [topStoryIds, setTopStoryIds] = useState([]);
      const [stories, setStories] = useState([]);
    
      useEffect(() => {
       
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
          .then((response) => response.json())
          .then((data) => {
            const top10StoryIds = data.slice(0, 5)
            setTopStoryIds(top10StoryIds);
        
            top10StoryIds.forEach((storyId) => {
              fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then((response) => response.json())
                .then((story) => {
                         
                  const newStory = {
                    id: story.id,
                    title: story.title,
                    url: story.url,
                    timestamp: new Date(story.time * 1000).toLocaleString(),
                    score: story.score,
                    authorId: story.by,
                  };    
                  setStories((prevStories) => [...prevStories, newStory]);
                });
            });
          });
      }, []);
      return (
        <div className='webHack-stories'>
            <div className="webHack-stories-heading">
            <h1>10 Hacker News Stories</h1>
            </div>
       
          <div className="webHack-story">  
          <ul>
            {stories.map((story) => (
              <div className="webHack-story-item" key={story.id}>
                <img className="dummy-img" src={dummy} alt="" />
                <h2>{story.title}</h2>
                <p>Author: {story.authorId}</p>
                <p>Id: {story.id}</p>
                <p>URL: {story.url}</p>
                <p>Timestamp: {story.timestamp}</p>
                <p>Score: {story.score}</p>
                
              </div>
            ))}
          </ul>
          </div>
       
        </div>
      );

  
}

export default Stories
