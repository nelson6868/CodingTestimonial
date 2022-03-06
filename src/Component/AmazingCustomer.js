import React from 'react'
import './MainStyle.css'
import firstImage from "../image/firstImage.JPG"



  function AmazingCustomer() {
  return (
    


   
    <div class="row">
        <div class="column"> 
           
              
            <span className="amazing">Amazing</span><br/>
            <span className="amazing2">Experiences from our</span><br/>
            <span className="amazing">Customers</span><br/>

            <span className="feedback">Here is what customers and vendors are saying about</span><br/>
            <span className="feedback2">us, you can share your stories too</span><br/>
          

           
            
        </div>
        <div className="column"><img src={firstImage} alt="logo" /> </div>
     
      </div>
    




      



      

  )
}


export  default AmazingCustomer;