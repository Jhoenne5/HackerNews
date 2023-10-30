import "./stories.scss";
import React, { useState, useEffect } from "react";
import { dummy } from "./import";

const Stories = () => {
  const [topStoryIds, setTopStoryIds] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => response.json())
      .then((data) => {
        const top10StoryIds = data.slice(0, 10);
        setTopStoryIds(top10StoryIds);

        const storyPromises = top10StoryIds.map((storyId) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then((response) => response.json())
        );

        Promise.all(storyPromises)
          .then((storyData) => {
            const newStories = storyData.map((story) => ({
              id: story.id,
              title: story.title,
              url: story.url,
              timestamp: new Date(story.time * 1000).toLocaleString(),
              score: story.score,
              authorId: story.by,
            }));

            newStories.sort((a, b) => a.score - b.score); // Sort stories by score in ascending order

            setStories(newStories);
          });
      });
  }, []);

  return (
    <div className="webHack-stories">
      <div className="webHack-stories-heading">
        <h1>10 Hacker News Stories</h1>
      </div>

      <div className="webHack-story">
        <ul>
          {stories.map((story) => (
            <div className="webHack-story-item" key={story.id}>
              <img className="dummy-img" src={dummy} alt="" />
              <div className="webHack-story-text-content">
                <h2 className="webHack-story-text-content-title">{story.title}</h2>
                <p>Author: {story.authorId}</p>
                <p>Id: {story.id}</p>
                <p className="webHack-story-text-content-url">
                  URL: <a href={story.url}>news link</a>
                </p>
                <p>Timestamp: {story.timestamp}</p>
                <p>Score: {story.score}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stories;
