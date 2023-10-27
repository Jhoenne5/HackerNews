import React from 'react'
import "./hero.scss"
import Ai from "../assets/AI.jpeg"

const Hero = () => {
  return (
    <div className='webHack-Hero section-padding'  id='home'>
      <div className='webHack-Hero-content'>
          <h1 className='text-gradient'>
          Stay Informed: Dive into the World of Cyber Intrigue with the    
          Latest Hacking News and Exclusive Insights  
          </h1>
          <p>
        Your ultimate source for the latest developments in the world of hacking and cybersecurity. As the digital landscape continues to evolve, so do the threats and innovations that shape it.
        Our mission is to keep you informed and provide exclusive insights into the ever-changing cyber realm. We're here to uncover the world of digital intrigue, sharing breaking news, in-depth analysis, and practical hacking tutorials.
        Stay ahead of the curve, explore our community, and connect with us on social media. Whether you're an enthusiast or a cybersecurity professional, we've got you covered.
        </p>
         
     
        <div className='webHack-hero-content-input'> 
        <input type="email" placeholder='example@email.com'/>
          <button type='button'>Let's Start!!</button>
        </div>
      </div>

    </div>
  )
}

export default Hero
