import React from 'react'
import orange from '../images/orange.png';
import socialLinksApi from './socialLinksApi';
import ArtApi from './ArtApi';
import InvestmentApi from './InvestementApi';
import ResourcesApi from './ResourcesApi';
import location from '../images/location.png';
import phone from '../images/phone.png';
import gmail from '../images/gmail.png';
import Privacy from '../Privacy';
import { NavLink } from 'react-router-dom';

import lowerFooterApi from './lowerFooterApi';
import AddressAvatarApi from './AddressAvatarApi';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
            <div className='first-footer'>
               <div className="first_logo">
                  <img src={orange} alt="orange" />
               </div>
               <div className='second_logo'>
                  {
                    socialLinksApi.map((val)=>{

                        return(
                          <img key={val.id} src={val.image} alt="google" />
                        )
                    })
                  }
               </div>
            </div>

            <div className='second-footer'>
               <span>Arth</span>
               <div className='second-footer-para'>
               {
                ArtApi.map(val=>{
                  return (
                   
                    <p>{val.Name}</p>
                    
                  )
                })
               }
               </div>
             
            </div>

            <div className='third-footer'>
            <span>Popular Investment</span>
            <div className="third-footer-para">
            {
              InvestmentApi.map(val=>{
                return(
                   <p>{val.Name}</p>
                )
              })
            }
            </div>
            </div>

            <div className='fourth-footer'>
            <span>Resources</span>
            <div className="fourth-footer-para">
            {
              ResourcesApi.map(val=>{
                return(
                  <p>{val.Name}</p>
                )
              })
            }
            </div>
            </div>

            <div className="fifth-footer">
              <span className='fifth-footer-span'>Contact Us</span>
              <div className='fifth-footer-para'>
                 {/* <p><span><img style={{width:'8px'}} src={location} alt="" /></span>10 Dhan Mohol, New york, NY, 25365 USA</p>
                 <p><span><img src={phone} alt="" /></span>Support: +1 (516) 231 1313</p>
                 <p><span><img src={gmail} alt="" /></span>Email: info@yourmail.com</p> */}

                 {
                  AddressAvatarApi.map(val=>{
                    return(
                      <p key={val.id}><span><img style={{width:val.width}} src={val.image} alt="not" /></span>{val.Name}</p>
                    )
                  })
                 }
              </div>

              <div className="btnInp">
                   <form >
                      <input type="text" placeholder='Email Address'  />
                      <button>Submit</button>
                   </form>
              </div>
            </div>

        </div>

        <div className='lower-footer'>
         <hr  className="foot-line" />
         <div className='another-footer-section'>
            <div className='section-para'>
              <p>Copyrights © 2021 Naresh Varma Design. All rights reserved.</p>
            </div>
            <div className="section-another-para">
                <NavLink to="/privacy"><p>Privacy Policy</p></NavLink>
               <NavLink to="/refund"> <p>Refund Policy</p></NavLink>
                <p>Sitemap</p>
                <p>Terms of Use</p>
            </div>
         </div>
         </div>
      </footer>
    </>
  )
}

export default Footer