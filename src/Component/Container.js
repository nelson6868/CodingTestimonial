import React from 'react'
import AmazingCustomer from "./AmazingCustomer";
import AmazingExperience from "./AmazingExperience";
import  CustomerTestimonial from  "./CustomerTestimonial";
import CustomerSecondTestimonial from "./CustomerSecondTestimonial";
import CustomerFeedBack from './CustomerFeedBack';
import VendorExperience from './VendorExperience';
import VendorSecondExperience from "./VendorSecondExperience";
import Footer from "./Footer";
import './MainStyle.css'

 function Container() {
  return (
    <div class='container mx-auto mt-5 col-md-10 col-11'>
         <AmazingCustomer/>
         <AmazingExperience/>
         <CustomerTestimonial/>
         <CustomerSecondTestimonial/> 
         <CustomerFeedBack/>
         <VendorExperience/>
         <VendorSecondExperience/>
         <Footer/>
    </div>
  )
}


export default  Container;