import React from "react";
import { Link } from "react-router-dom";
import line1 from "./images/line1.png";
import line2 from "./images/line2.png";
import map from "./images/map.png";
const Contact = () => {
  return (
    <>
      <div className="cont">
        <div className="first_heading_contact">
          <h2 style={{ color: "white" }}>
            Let's <span>Talk.</span>
          </h2>
          <p>
            Get in touch with us for all your staffing requirements and hire our
            optimal services for getting the project developments done with your
            budget estimate. We believe in building business partnerships that
            go long-term.
          </p>
        </div>

        <div className="second_heading_contact">
          <div className="concentric">
            <p>CONNECTING  ARATEK</p>
          </div>
          <div className="line">
            <div className="first_line">
              <img src={line1} alt="line" />
            </div>
            <div className="second_line">
              <img src={line2} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* second section  */}

      <div className="contact_us">
        <p className="contact_para">What would you like to Contact Us for ?</p>
        <div className="diff_btn">
          <Link className="first_link" to="#!">
            NEW PROJECT
          </Link>
          <Link className="second_link" to="#!">
            CONSULTING
          </Link>
          <Link className="third_link" to="#!">
            JOINING US
          </Link>
          <Link className="fourth_link" to="#!">
            JUST SAY HI
          </Link>
        </div>

        <div className="form_map">
          <div className="torm_map">
            <div className="sorm_map">
              <div className="sorm_map1">
                <h4>SUPPORT <span>EMAIL</span></h4>
                <p >support@aratek.co</p>
                <div className="border"></div>
              </div>
              <div className="sorm_map2">
                <h4>SUPPORT <span>EMAIL</span></h4>
                <p>support@aratek.co</p>
                <div className="sorder"></div>
              </div>
            </div>
             <div className="map">
               <img src={map} alt="" />
             </div>
          </div>

          <div className="form_cont">
            <div class="wrapper">
              <div class="form">
                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="COMPANY NAME*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="NAME*" />
                  </div>
                 
                </div>
                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="JOB TITLE*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="COUNTRY*" />
                  </div>
                 
                </div>

                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="EMAIL*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="COUNTRY*" />
                  </div>
                 
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea placeholder="PLEASE SELECT PRODUCT OF INTEREST*"></textarea>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea className="second_area" placeholder="MESSAGE"></textarea>
                  </div>
                  
                </div>

                <button class="btn-form-contact">Send Message</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
