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
              <li><a href="#">About us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">LogIn</a></li>
              <li><a href="#">SignUp</a></li>
            
            </ul>
          </div>
        </div>
        <div class="bottom_nav">
          <ul>
            <li><a href="#">Market place</a></li>
            <li><a href="#">Wholesale</a></li>
            <li><a href="#">Seller Center</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Interships</a></li>
            <li><a href="#">Events</a></li>
         
          </ul>
      </div>
      
    
    </div>
  )
}

export default Navbar;
