import React from 'react'

import imgLogo from "../image/logo.JPG"

import "./Navbar.css"

function Navbar() {
  return (
    <div class="wrapper">
        
        <div class="top_nav">
            <div class="left">
           
            
              <div className="logo"><img src={imgLogo} alt="logo" />
             
              </div>
           
          </div> 
          <div class="right">
            <ul>
              <li>About us</li>
              <li>Stories</li>
              <li>Contact</li>
              <li>LogIn</li>
              <li>SignUp</li>
            
            </ul>
          </div>
        </div>
        <div class="bottom_nav">
          <ul>
            <li>Market place</li>
            <li>Wholesale</li>
            <li>Seller Center</li>
            <li>Services</li>
            <li>Interships</li>
            <li>Events</li>
         
          </ul>
      </div>
      
    
    </div>
  )
}

export default Navbar;
