import React from 'react'
import Temi from "../image/Temi.JPG"
import PromiseEjiofor from "../image/PromiseEjiofor.JPG";
import feyisola from "../image/Adetola.JPG";

// import JosephIke from "../image/josephIke.JPG"
// import Emmanuel from "../image/Emmanuel.JPG"
// import Adetola from "../image/Adetola.JPG"
import './MainStyle.css';




function Vendor_Experience() {
  return (












    <div className="row" style={{marginLeft:"10rem"}}>
    <div className="card col-md-3 col-11"  style={{float:"left"}}>
        <div className="card-content">
            <div class="card-body p-0">

                <div className="profile mb-4 mt-3">   <img src={Temi} alt="josephIke" /> </div>
                <span className="name">Joseph Ike</span>
                 <div className="_row">
                
                    <div className="column">In Ikeja</div>
                        <div className="column" id="customer"> CUSTOMER.</div><br/>
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
                <div className="profile mb-4 mt-3"><img src={PromiseEjiofor} alt="PromiseEjiofor" /></div>
                <span className="name">Adetola Fashina</span>
                <div class="_row">
               
                   <div className="column">Ibedan</div>
                    <div className="column" id="customer"> CUSTOMER.</div><br/>
                      
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
                <div className="profile mb-4 mt-3">  <img src={feyisola} alt="Emmanuel" /></div>
                <span className="name">Joseph Ike</span>
                <div className="_row">
               
                   <div className="column">In Akoka</div>
                       <div className="column" id="customer"> CUSTOMER.</div><br/>
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


export default Vendor_Experience;