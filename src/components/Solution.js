import React from 'react'
import solution from '../components/images/Solutions.png';
import fillo from '../components/images/fillo.png';
import fillo2 from '../components/images/fillo2.png';
import fillo3 from '../components/images/fillo3.png';
import fillo4 from '../components/images/fillo4.png';
const Solution = () => {
  return (
    <>
        <div className='kushel-solution'>
           <div className="solution-img">
               <h2>Our</h2>
               <img src={solution} alt="ent solution" />
           </div>

           <div className="solution-offer">
              <div className='solution-offer-first'>
                 <span>
                    What We Do
                 </span>
                 <div className='head-para-offer'>
                    <h2>We design and develop user centric SaaS products, web app and mobile applications since a decade.</h2>
                    {/* <h2></h2>
                    <h2></h2> */}
                    <div className="ping3">
                    <p>
                    We work with diverse brands, organizations, enterprises, startups and individuals to create powerful softwares from excellent idea.
                    </p>
                    {/* <p></p>
                    <p></p> */}
                    </div>
                 </div>
                 <button>About us</button>
              </div>
              <div className='solution-offer-second'>
                  <div className="offer-box-1">
                       <div className="offer-img">
                           <img src={fillo} alt="not" />
                       </div>
                       <div className="offer-para">
                          <p>Enterprises</p>
                       </div>
                  </div>
                  <div className="offer-box-2">
                     <div className="offer-img1">
                        <img src={fillo2} alt="filos" />
                     </div>
                     <div className="offer-para1">
                        <p>Organisation</p>
                     </div>
                  </div>
              </div>
              <div className='solution-offer-third'>
              <div className="eltimate-box">
                  <div className="offer-box-3">
                       <div className="offer-img2">
                           <img src={fillo3} alt="not" />
                       </div>
                       <div className="offer-para2">
                            <p>Individuals</p>
                       </div>
                  </div>
                  <div className="offer-box-4">
                       <div className="offer-img3">
                          <img src={fillo4} alt="fillot" />
                       </div>
                       <div className="offer-para3">
                          <p>Startaps</p>
                       </div>
                  </div>
                  </div>
              </div>
           </div>
        </div>
    </>
  )
}

export default Solution