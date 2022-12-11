import React,{useState} from "react";
import Abo from '../components/images/ABOUT.png';
import vision from '../components/images/vision.png';
import mission from '../components/images/mission.png';
const About = () => {
  
  return (
    <>
     <div className="success-ab">
        <div className="success-ab-img">
            <img src={Abo} alt="" />
        </div>
        <div className="who-suc">
          <span>Who we are</span>
          <div className="head-para-suc">
              <h2>A team of Creative Minds designing best Apps and Website for the World.At Mindlnventory, we make sure that alongside growth of the company, our employees and client grow by providing a great work-life Culture in the Industry.</h2>

              <p>Our team works hand in hand with the client and make sure that the product that they are working on not only becomes success but also leaves an impression on the user being easy to use and keeping in mind the interest of its users.</p>
          </div>
        </div>
     </div>

     <div className="vision-succ">
         <div className="vision">
            <img src={vision} alt="" />
            <h2>Our Vision</h2>
            <div className="vision-para">
               <p>We paint the bright future for the businesses</p>
               <p>working on digital landscapes and firmly believe in</p>
               <p>providing productive long-term business</p>
               <p>relationships.</p>
            </div>
         </div>
         <div className="mission">
         <img src={mission} alt="" />
            <h2>Our Mission</h2>
            <div className="mision-para">
               <p>Handover contemporary and futuristic web and</p>
               <p>mobile software solutions to the businesses ranging</p>
               <p>from startups to enterprises with affordability and</p>
               <p>satisfaction.</p>
            </div>
         </div>
     </div>

     {/* <div className="now-2022">
        <div className="years">
            <div className="years1">
                 <span>Now</span>
            </div>
            <div className="years2">

            </div>
        </div>
     </div> */}
    </>
  );
};

export default About;
