import React from 'react'
import ThirdImage from "../image/ThirdImage.JPG"
import './MainStyle.css';
export default function CustomerFeedBack() {
  return (
    <div className="row3">
           
    <div className="column"> 
       
        
    {/* <span className="amazingExperience1">Amazing</span><br/> */}
               <span className="amazingExperience1">Josiah's Experience</span><br/>
               <span className='customer1'>VENDOR</span><br/>

               <span className="feedbackAmazingExperience1"></span><br/>
               <span className="feedbackAmazingExperience1">I had the best experience shopping with vasiti</span><br/>
               <span className="feedbackAmazingExperience1">Usability of the  website.has great  very good</span><br/>
               <span className="feedbackAmazingExperience1">Customer service, an all round great</span><br/>
               <span className="feedbackAmazingExperience1">experience.I would definately be coming back</span><br/>
               <span className="feedbackAmazingExperience1">Usability of the  website was great, very good</span><br/>
               <span className="feedbackAmazingExperience1">Customer service,an all round great</span><br/>
               <span className="feedbackAmazingExperience1">experience i would definately be coming back</span><br/>
               
      

       
        
    </div>
    <div className="column">  <img src={ThirdImage} alt="ThirdImage" /></div>

  </div>
  )
}
