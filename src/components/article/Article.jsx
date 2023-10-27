    import React from 'react'
    import "./article.scss"
  
    const Article = ({imgUrl, storyTitle, storyUrl}) => {
      return (
        <div className='webHack-news-container-article'>

          <div className='webHack-news-container-article-image'>
            <img src={imgUrl} alt="blogImage" />
          </div>

          <div className='webHack-news-container-article-content'>
            <div>
             <h3> {storyTitle}</h3>
             <p>{storyUrl}</p> 
            </div>
          </div>

        </div> 
       
         
      
      )
    }
    
    export default Article
    