import React from 'react'
import {RiMenu3Line, RiCloseLine } from "react-icons/ri";
import  Logo from "../assets/logo.png"
import "./navbar.scss";
import { useState } from 'react';

const Navbar = () => {

  const MenuLinks = () => {
    return(
      <> 
      <p className='webHack-p-item'><a href="#Home">Home</a></p>
      <p className='webHack-p-item'><a href="#Home">Safety</a></p>
      <p className='webHack-p-item'><a href="#Home">News</a></p>
      <p className='webHack-p-item'><a href="#Home">Featured</a></p>
      <p className='webHack-p-item'><a href="#Home">Updates</a></p>
      </>
    ) 
  }

  const [toggleMenu, setToggleMenu] = useState(false)
  
  return (
    <div className='webHack-navbar'>

        <div className='webHack-navbar-links'>
          <div className='webHack-navbar-links-logo'>
            <img src={Logo} alt="logo" className='logo'/>
          </div>

          <div className='webHack-navbar-links-container'>
          <MenuLinks/>
          </div>
        </div>

        <div className='webHack-navbar-sign'>
          <p className='webHack-p-item'> <a href="#">sign in</a></p>
          <button type='button'>sign up</button>
        </div>

        <div className='webHack-navbar-menu'>
            {toggleMenu
            ?<RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
            :<RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
            }     
        </div> 
        {toggleMenu && 
        <div className='webHack-navbar-menu-container scale-up-center'>
            <div className='webHack-navbar-menu-container-links'>
            <MenuLinks/>
            <div className='webHack-navbar-menu-container-link-sign'>
          <p>sign in</p>
          <button type='button'>sign up</button>
           </div> 
            </div>
          </div>}
       

    </div>

 
  )
}

export default Navbar
