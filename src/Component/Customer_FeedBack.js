import React from 'react'
import ThirdImage from "../image/ThirdImage.JPG"
import './MainStyle.css';
export default function Customer_FeedBack() {
  return (
    <div className="row3">
           
    <div className="column"> 
       
          
        <span className="amazing">Amazing</span><br/>
        <span className="amazing2">Experiences from our</span><br/>
        <span className="amazing">Customers</span><br/>

        <span className="feedback">Here is what customers and vendors are saying about</span><br/>
        <span className="feedback2">us, you can share your stories too</span><br/>
      

       
        
    </div>
    <div className="column">  <img src={ThirdImage} alt="ThirdImage" /></div>

  </div>
  )
}
