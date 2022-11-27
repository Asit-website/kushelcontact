import React,{useRef} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import mask from "../components/images/mask.png";
import apple from "../components/images/apple.png";
import arrow from "../components/images/arrow-right.png";

import digia from '../components/images/digia.png';
import emotions from '../components/images/emotions.png';

const About = () => {
  const crausol = useRef();
  let box = document.querySelector('.product-container');

  const btnpressprev = (e) => {
   
    crausol.current.scrollLeft -= crausol.current.offsetWidth;
  }

  const btnpressnext = (e) => {
    console.log(crausol.current)
     crausol.current.scrollLeft += crausol.current.offsetWidth;
  }
  return (
    <>
    <div style={{backgroundColor:'red',width:'100%',height:'100vh'}} className=''>
       
    </div>
    <button className="pre-btn" onClick={btnpressprev}><p>hi</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>yes</p></button>
    <div style={{display:'flex'}}   className="product-container">
    
    <div ref={crausol}  className="section-service">
            <div className="first-service">
              <div  id="ask" className="three-section-first">
                <img className="first-im" src={mask} alt="" />
                <p>
                  Website <br /> Development
                </p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
            
            <div className="third-service">
              <div  id="bsk" className="three-section-third">
                <img className="third-im" src={apple} alt="" />
                <p>App Development</p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
          
          </div>

          <div ref={crausol}  className="section-service">
            <div className="second-service">
              <div  id="csk" className="three-section-second">
                <img className="second-im" src={digia} alt="" />
                <p>
                Digital Marketing
                </p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
            <div className="fourth-service">
              <div  id="dsk" className="three-section-fourth">
                <img className="fourth-im" src={emotions} alt="" />
                <p>E-Commerce</p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
          
          </div>
          <div  className="section-service">
            <div className="second-service">
              <div  id="csk" className="three-section-second">
                <img className="second-im" src={digia} alt="" />
                <p>
                Digital Marketing
                </p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
            <div className="fourth-service">
              <div  id="dsk" className="three-section-fourth">
                <img className="fourth-im" src={emotions} alt="" />
                <p>E-Commerce</p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
          
          </div>
          <div  className="section-service">
            <div className="second-service">
              <div  id="csk" className="three-section-second">
                <img className="second-im" src={digia} alt="" />
                <p>
                Digital Marketing
                </p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
            <div className="fourth-service">
              <div  id="dsk" className="three-section-fourth">
                <img className="fourth-im" src={emotions} alt="" />
                <p>E-Commerce</p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
          
          </div>
            </div>
    <Carousel>
        
        
        </Carousel>
       
    </>
  )
}

export default About