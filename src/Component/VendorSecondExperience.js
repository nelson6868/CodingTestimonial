import React from 'react'
import Karen from "../image/Karen.JPG"
import Oluchi from "../image/Oluchi.JPG"
import Amose from "../image/Amose.JPG"


 function VendorSecondExperience() {
  return (
    



    <div className="row" style={{marginLeft:"10rem"}}>
    <div className="card col-md-3 col-11"  style={{float:"left"}}>
        <div className="card-content">
            <div class="card-body p-0">

                <div className="profile mb-4 mt-3">   <img src={Karen} alt="Karen" /> </div>
                <span class="name">Karen Ibeh</span>
                 <div className="_row">
                
                
                        <div className="column" id="customer"> Vendor.</div><br/>
                 </div>
                <div class="card-subtitle">
                    <p> <small className="text-muted"> <i className="fas fa-quote-left"></i> 
                        <span className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sagittis dolor vitae sem pulvinar
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sagittis dolor vitae sem pulvinar
                       </span>
                          <i className="fas fa-quote-left fa-flip-horizontal"></i> </small> </p>
                </div>
               
            </div>
        </div>
    </div>
   







    <div className="card col-md-3 col-11 second" style={{float:"left"}}>
        <div className="card-content">
            <div className="card-body p-0">
                <div className="profile mb-4 mt-3"><img src={Oluchi} alt="Oluchi" /></div>
                <span class="name">Oluchi Uzo</span>
                <div class="_row">
               
                   
                    <div className="column" id="customer"> Vendor.</div><br/>
                      
                </div>
                <div className="card-subtitle">
                    <p> <small className="text-muted"> <i className="fas fa-quote-left "></i> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sagittis dolor vitae sem pulvinar
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sagittis dolor vitae sem pulvinar <i class="fas fa-quote-left fa-flip-horizontal"></i> </small> </p>
                </div>
               
            </div>
        </div>
    </div>
    


    <div class="card col-md-3 col-11 third">
        <div className="card-content">
            <div className="card-body p-0">
                <div className="profile mb-4 mt-3">  <img src={Amose} alt="Amose" /></div>
                <span className="name">Amose</span>
                <div className="_row">
               
                   <div className="column">In Akoka</div>
                       <div className="column" id="customer">Vendor.</div><br/>
                </div>
                <div className="card-subtitle">
                    <p> <small className="text-muted"> <i className="fas fa-quote-left"></i> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sagittis dolor vitae sem pulvinar
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sagittis dolor vitae sem pulvinar <i className="fas fa-quote-left fa-flip-horizontal"></i> </small> </p>
                </div>
               
            </div>
        </div>
    </div>
</div>

 


 )
}


export default  VendorSecondExperience;