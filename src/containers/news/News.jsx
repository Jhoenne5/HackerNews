import React from 'react'
import "./news.scss"
import { Article } from '../../components'
import { news1,  news3, news4 } from './import'

const News = () => {
  return (
    <div className='webHack-news section-padding'>
      <div className='webHack-news-heading'> 
        <h1 className='text-gradient'>
        Our mission is to deliver the latest updates on cybersecurity and hacking news.
        </h1>
      </div>

      <div className='webHack-news-container'>

        <div className='webHack-news-container-groupA'>
          <Article imgUrl={news3} 
          storyTitle={"My YC app: Dropbox - Throw away your USB drive"} 
          storyUrl={"October 23, 2023"} 
        
        />
        </div>

        <div className='webHack-news-container-groupB'>
         
         <Article imgUrl={news1} 
         storyTitle={"Ransomware Attack Targets Critical Infrastructure, Raises National Concerns"} 
         storyUrl={"October 20, 2023"} 
       
        />
    
        
        </div>

        <div className='webHack-news-container-groupC'>
        <Article imgUrl={news4} 
        storyTitle={"Cyber Vigilantes Strike Back: Hacking Group Exposes Corporate Wrongdoings"} 
        storyUrl={"October 15, 2023"} 
        
    />
        </div>

      </div>
      
    </div>
  )
}

export default News
