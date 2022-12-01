import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import line1 from "./images/line1.png";
import line2 from "./images/line2.png";
import map from "./images/map.png";
const Contact = () => {
  const [tabIndex, setTabIndex] = useState(1);

  var css = {
    background: "#0e66f9",
    maxWidth: "230px",
    width: "100%",
    height: "40px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    border:"none"
  };

  var secondCss = {
    background:"transparent",
    maxWidth: "230px",
    width: "100%",
    height: "40px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    border:"2px solid #ffffff"
  };

  const tabChange = (e) =>{
    e.preventDefault();
    setTabIndex(1);
    for (var prop in secondCss) {
      document.getElementById("camp").style[prop] = secondCss[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("tamp").style[prop] = secondCss[prop];
    }
    for (var prop in css) {
      document.getElementById("barier").style[prop] = css[prop];
    }
  }
  const tabChange1 = (e) =>{
    e.preventDefault();
    setTabIndex(2);
    for (var prop in css) {
      document.getElementById("camp").style[prop] = css[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("barier").style[prop] = secondCss[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("tamp").style[prop] = secondCss[prop];
    }
  }

  const tabChange2 = (e) =>{
    e.preventDefault();
    setTabIndex(3);
    for (var prop in css) {
      document.getElementById("tamp").style[prop] = css[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("barier").style[prop] = secondCss[prop];
    }
    for (var prop in secondCss) {
      document.getElementById("camp").style[prop] = secondCss[prop];
    }
  }
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
          <NavLink id="barier" onClick={tabChange} className="first_link" to="#!">
            NEW PROJECT
          </NavLink>
          <NavLink id="camp" onClick={tabChange1} className="second_link" to="#!">
            CONSULTING
          </NavLink>
          <NavLink id="tamp" onClick={tabChange2}  className="third_link" to="#!">
            JOINING US
          </NavLink>
          <NavLink  className="fourth_link" to="#!">
            JUST SAY HI
          </NavLink>
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
            {
              tabIndex === 1 && (
                <>
                <div class="form">
                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="Full Name*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="Company Name*" />
                  </div>
                 
                </div>
                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="Website*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="Designation*" />
                  </div>
                 
                </div>

                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="Email Address*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="Location*" />
                  </div>
                 
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea placeholder="Estimated Budget*">
                     
                    </textarea>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea className="second_area" placeholder="Phone"></textarea>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea className="second_area" placeholder="MESSAGE"></textarea>
                  </div>
                  
                </div>

                <button class="btn-form-contact">Send Message</button>
              </div>
                </>
              )
            }

            {
              tabIndex === 2 && (
                <>
                <div class="form">
                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="Full Name*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="Company Name*" />
                  </div>
                 
                </div>
                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="Website*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="Designation*" />
                  </div>
                 
                </div>

                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="Email Address*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="Location*" />
                  </div>
                 
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea placeholder="Service*">
                     
                    </textarea>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea className="second_area" placeholder="Phone"></textarea>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea className="second_area" placeholder="MESSAGE"></textarea>
                  </div>
                  
                </div>

                <button class="btn-form-contact">Send Message</button>
              </div>
                </>
              )
            }
            {
                 tabIndex === 3 && (
                  <div class="form">
                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="Full Name*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="Company Name*" />
                  </div>
                 
                </div>
                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="Website*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="Designation*" />
                  </div>
                 
                </div>

                <div class="top-form">
                  <div class="inner-form">
                    <input type="text" placeholder="Email Address*" />
                  </div>
                  <div class="inner-form">
                    <input type="text" placeholder="Location*" />
                  </div>
                 
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea placeholder="Estimated Budget*">
                     
                    </textarea>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea className="second_area" placeholder="Phone"></textarea>
                  </div>
                  
                </div>

                <div class="bottom-form">
                  <div class="inner-form">
                    <textarea className="second_area" placeholder="MESSAGE"></textarea>
                  </div>
                  
                </div>

                <button class="btn-form-contact">Send Message</button>
              </div>
                 )
            }
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
