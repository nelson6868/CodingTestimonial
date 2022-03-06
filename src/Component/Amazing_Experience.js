import React from 'react'

import SecondImage from "../image/SecondImage.JPG"
import './MainStyle.css'

export default function Amazing_Experience() {
  return (
<div className="row2">
           
           <div className="column"> 
              
                 
               <span className="amazing">eeeeee Amazing</span><br/>
               <span className="amazing">Experiences from our</span><br/>
               <span className="amazing">Customers</span><br/>

               <span className="feedback">Here is what customers and vendors are saying about</span><br/>
               <span className="feedback2">us, you can share your stories too</span><br/>
             

              
               
           </div>
          
           <div className="column"><img src={SecondImage} alt="SecondImage" /> </div>
      
         </div>

  )
}
