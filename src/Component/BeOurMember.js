import React from 'react'

import  phoneImage from "../image/phoneImage.JPG"
import './MainStyle.css'

 function BeOurMember() {
  return (
  




    
    <div class="footer_row">
    <div class="column"> <img src={phoneImage} alt='PhoneImage'/> </div>

    <div class="column" id="comMember"> 
       
         
        <span class="member">Be a Member</span><br/>
        <span class="member">of our Community</span><br/>
         <span class="feedback3">We'd make sure you're always first to know whats</span><br/>
        <span class="feedback3">happing on vasiti-thus;the world</span><br/>
     
        <form>
            <div class="form">
                <div class="row">
                    <div class="column"><input  name="text" placeholder="Enter your email address"/></div>
                    <div class="column"><button class="btn">submit</button></div>
       
        </div>
        </div>
        </form>
      

       
 
    </div>
  

  </div>





  )
}
export default  BeOurMember;