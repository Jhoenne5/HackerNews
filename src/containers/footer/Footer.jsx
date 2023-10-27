import React from 'react'
import "./footer.scss"
import Logo from "../../components/assets/logo.png"


const Footer = () => {
  return (
    <div className='webHack-footer section-padding'>
        <div className='webHack-footer-heading' >
          <h1 className='text-gradient'>
       Thank you for being a part of our cybersecurity community. Your presence and engagement are greatly appreciated.
         
          </h1>

        </div>
        

        <div className='webHack-footer-links'>

            <div className='webHack-footer-links-logo'>
              <img src={Logo} alt="" className='footer-logo' />
           
            </div>
      

          <div className='webHack-footer-links-div'>
                <h4>Links</h4>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Instagram</p>
          </div>

          <div className='webHack-footer-links-div'>
                <h4>Explore</h4>
                <p>Discover Our Products & Services</p>
                <p>Navigate Our Offerings</p>
                <p>Explore What We Have to Offer</p>
                <p>Dive into Our World</p>
          </div>
          
          <div className='webHack-footer-links-div'>
                <h4>Contact Us</h4>
                <p>Get in Touch with Our Team</p>
                <p>Reach Out for Assistance</p>
                <p>Let's Connect</p>
                <p>Contact Our Support</p>
          </div>

          </div>
        <div className='webHack-footer-copyright'>
          
          <p>© 2023 JhoenneE. All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer
