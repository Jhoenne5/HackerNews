import React from 'react'
import "./safety.scss"
import { hatWhite } from './import'

const Safety = () => {

  const FeaturesData1 = [
    {
      title:"Enhancing trust immediately.",
      text: "From the enigmatic John, a wealth of information unfolds. Just as they mature and captivate Mrs., the household applauds the instant dissolution of distrust. Dive into the world of hacking news on our website."

    },
    {
      title:"Become the vigilant participant in the realm of hacking news.",
      text:"While sympathy is not typically considered a constant source of assistance, there are rare moments when it proves to be quite sufficient. Dive into the world of hacking news on our website and discover how these occasional acts of enablement can become a driving force."

    }
  ]

  
  const FeaturesData2 = [
    {
      title:"ECommunicate or fade into obscurity in the domain of hacking news.",
      text:"Engage in the art of debate with possible mistresses who possess elegance and address. Within our website dedicated to hacking news, we explore the depths of these digital discussions, where messages hold the key to everything."

    },
    {
      title:"Explore the law of the digital county with our hacking news.",
      text:"In this law-bound county, a young woman finds herself alongside her sister, both navigating the terrain with an air of sophistication. Join us on our hacking news website, where we uncover the secrets that lie beneath the surface, like a rapidly spreading blush."

    } 
  ]

  return (
    <div className='webHack-safety section-padding'>
      <div className='webHack-safety-heading'> 
      <h2 className=' text-gradient'>The Cyber Realm Awaits, and All You Need is to Unveil It.
         Dive into the Digital Future Today and Forge It.</h2>
      </div>

    <div className='webHack-safety-features-container'> 

    <div className='webHack-safety-features'>
        {FeaturesData1.map((data,)=>{
          return(
            <div className='webHack-safety-features-content'>
              <div className='webHack-safety-features-title-container'>
                <h2> {data.title} </h2>
              </div>
                <div className='webHack-safety-features-text-container'>
                  <p> {data.text} </p>     
                </div>   
            </div>
          )
        
        })}
      
      </div>
      
      <div className='webHack-safety-features'>
        {FeaturesData2.map((data,)=>{
          return(
            <div className='webHack-safety-features-content'>
              <div className='webHack-safety-features-title-container'>
                <h2> {data.title} </h2>
              </div>
                <div className='webHack-safety-features-text-container'>
                  <p> {data.text} </p>     
                </div>   
            </div>
          )
        
        })}
      
      </div>
    </div>



        <div className='webHack-safety-whiteHat-container'>

         <div className='webHack-safety-whiteHat-container-img'>
            <img src={hatWhite} alt="White hat" />
         </div>

         <div className='webHack-safety-whiteHat-container-text-content'>
            
              <div>
                <h2 className='text-gradient'>What is a white hat hacker?</h2>
              </div>
                <div>
                    <p>A white hat refers to a morally responsible cybersecurity expert, and ethical hacking is a term that encompasses more than just penetration testing. 
                      With the owner's permission, white-hat hackers strive to uncover and address any weaknesses or security concerns within the existing system..</p>
                </div>
                <div className='webHack-safety-whiteHat-container-text-content-RM'>
                  <p>read more...</p>
                </div>

         </div>
        
        </div>
 
    
  
    </div>
  )
}

export default Safety
