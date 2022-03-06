import React from 'react'
import Amazing_Customer from "./Amazing_Customer";
import Amazing_Experience from "./Amazing_Experience";
import  Customer_Testimonial from  "./Customer_Testimonial";
import Customer_Second_Testimonial from "./Customer_Second_Testimonial";
import Customer_FeedBack from './Customer_FeedBack';
import Vendor_Experience from './Vendor_Experience';
import Vendor_Second_Experience from "./Vendor_Second_Experience";
import Footer from "./Footer";
import './MainStyle.css'

 function Container() {
  return (
    <div class='container mx-auto mt-5 col-md-10 col-11'>
         <Amazing_Customer/>
         <Amazing_Experience/>
         <Customer_Testimonial/>
         <Customer_Second_Testimonial/> 
         <Customer_FeedBack/>
         <Vendor_Experience/>
         <Vendor_Second_Experience/>
         <Footer/>
    </div>
  )
}


export default  Container;