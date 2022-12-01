import React, { useState } from "react";
import solution from "../components/images/Solutions.png";
import fillo from "../components/images/fillo.png";
import fillo2 from "../components/images/fillo2.png";
import fillo3 from "../components/images/fillo3.png";
import fillo4 from "../components/images/fillo4.png";
import { NavLink } from "react-router-dom";
import tvseries from "../components/images/tvseries.png";
import array from "../components/images/array.png";
import cloud from "../components/images/cloud.png";
import ops from "../components/images/ops.png";
import doublehand from "../components/images/doubleHand.png";
import setting from "../components/images/setting.png";
import ditrans from "../components/images/ditrans.png";
import industryApi from "./industryApi/industryApi";
import logoa from "../components/images/logoa.png";
import mobile from "../components/images/mobile.png";
import putkia from "../components/images/putkia.png";
import log from "../components/images/log.png";

import SolutionApiFirst from "./solutionApi/SolutionApiFirst";
const Solution = () => {
  const [start, setStart] = useState(false);

  const handleMouseOver = () => {
    setStart(true);
  };

  const handleMouseOut = () => {
    setStart(false);
  };

  return (
    <>
      <div className="kushel-solution">
        <div className="solution-img">
          <h2>Our</h2>
          <img src={solution} alt="ent solution" />
        </div>

        <div className="solution-offer">
          <div className="solution-offer-first">
            <span>What We Do</span>
            <div className="head-para-offer">
              <h2>
                We design and develop user centric SaaS products, web app and
                mobile applications since a decade.
              </h2>
              {/* <h2></h2>
                    <h2></h2> */}
              <div className="ping3">
                <p>
                  We work with diverse brands, organizations, enterprises,
                  startups and individuals to create powerful softwares from
                  excellent idea.
                </p>
                {/* <p></p>
                    <p></p> */}
              </div>
            </div>
            <NavLink to="/about">
              {" "}
              <button>About us</button>
            </NavLink>
          </div>
          <div className="solution-offer-second">
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
          <div className="solution-offer-third">
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
      <div className="bara-section">
        <div className="mobility-solution">
          <div className="mobile-sox">
            <div className="sox-img">
              <img src={tvseries} alt="not working" />
            </div>
            <div className="sox-text">
              <p>
                Enterprise Mobility
                <br />
                Solutions
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="again" />
            </div>
          </div>
          <div className="mobile-sox">
            <div className="sox-img">
              <img src={cloud} alt="" />
            </div>
            <div className="sox-text">
              <p>
                Cloud Computing <br /> Solutions
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="" />
            </div>
          </div>
          <div className="mobile-sox">
            <div className="sox-img">
              <img className="fig" src={ops} alt="out" />
            </div>
            <div className="sox-text">
              <p>
                Cloud Computing <br /> Solutions
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="" />
            </div>
          </div>
        </div>
        <div className="mobility-solution nobility">
          <div className="mobile-sox">
            <div className="sox-img">
              <img src={doublehand} alt="not working" />
            </div>
            <div className="sox-text">
              <p>
                Software Solutions <br /> for Startups
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="again" />
            </div>
          </div>
          <div className="mobile-sox">
            <div className="sox-img">
              <img className="fig" src={setting} alt="" />
            </div>
            <div className="sox-text">
              <p>
                Software Solutions <br /> for Startups
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="" />
            </div>
          </div>
          <div className="mobile-sox">
            <div className="sox-img">
              <img className="fig" src={ditrans} alt="out" />
            </div>
            <div className="sox-text">
              <p>
                Cloud Computing <br /> Solutions
              </p>
            </div>
            <div className="sox-images">
              <img src={array} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ==============tech div================= */}
      <div className="technology">
        <div className="tech-div sol-tef">
          <h2>Let’s Discuss Your Project</h2>
          <div className="tech-para">
            <p>
              Get free consultation and let us know your project idea to turn it
              into{" "}
            </p>
            <p>an amazing digital product.</p>
          </div>
          <NavLink to="/about">
            <button className="tech-btn">About us</button>
          </NavLink>
        </div>
      </div>

      {/* ======================industry code=============== */}

      <div className="industry" style={{ backgroundColor: "#0E0E0E" }}>
        <h2>Our Industry wise</h2>
        <img src={solution} alt="nothing" />

        <div className="industry-system">
          <div className="small-fintech">
            <span>Fintech</span>
            <div className="fintech-para">
              {industryApi.map((val) => {
                return <p>{val.Name}</p>;
              })}
            </div>
          </div>
          <div className="big-fintech">
            <span>Fintech</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfer</li>
                <li>Easy Investment & Guides</li>
                <li>Manage Daily Expences And Offers</li>
              </ul>
            </div>

            <div className="img-techa">
              <img src={logoa} alt="" />
            </div>
          </div>

          <div className="fin-portfolio">
            <button className="fin-btn">View Portfolio</button>
            <div className="fin-image">
              <img src={mobile} alt="hter" />
            </div>
          </div>
        </div>
      </div>

      {/* ========ondeman=============== */}

      <div className="on-demand">
        <div className="demans-group">
          <h2>On-demand Solutions</h2>
          <p className="on-demans-para">
            At MindInventory, we provide wide range of on-demand services using
            the most advanced technology and proficiency of our team of veteran
            on demand app developers. Followings are some of the trending
            on-demand services.
          </p>

          <div className="demans-section">
            {SolutionApiFirst.map((val) => {
              return (
                <>
                  <div key={val.id} className={val.className}>
                    {val.names.map((val1) => {
                      return (
                        <div key={val1.id} className="im-de">
                          <img src={val1.image} alt="ok" />
                          <p>{val1.name}</p>
                        </div>
                      );
                    })}

                    {/* <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Laundry App</p>
                </div>

                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Home Repair App</p>
                </div> */}
                  </div>
                </>
              );
            })}

            {/* 
                <div className='demans-second'>
                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Courier & Logistics</p>
                </div>
                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Car Booking</p>
                </div>
                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Beauty & Salon</p>
                </div>
                </div>
                <div className='demans-third'>
                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Courier & Logistics</p>
                </div>
                <div className="im-de">
                    <img src={putkia} alt="ok" />
                    <p>Car Booking</p>
                </div>
                </div> */}
          </div>

          <NavLink to="/about">
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              {start ? "About Us" : "Explore More"}
            </button>
          </NavLink>
        </div>
        <div className="two-div two-di">
          <div
            style={{ width: "570px", maxWidth: "100%" }}
            className="one-color one-col"
          >
            <div className="span-group">
              <span>Can’t find a service you are </span>
              <span>looking for?</span>
            </div>
            <button>Explore All Services</button>
          </div>
          <div
            style={{ width: "570px", maxWidth: "100%" }}
            className="ano-color ano-col"
          >
            <div className="ano-group">
              <span>Want to hire a resource to </span>
              <span>work with you?</span>
            </div>
            <button>Hire team</button>
          </div>
        </div>

        <div className="busta sortinga">
          <h2>BUSINESS MODELS</h2>
          <div className="three-business">
            <p className="first-b">Time & Material</p>
            <p className="second-p">Hire Team</p>
            <p className="third-p">Fix Scope Model</p>
          </div>

          <div className="pic-para">
            <div className="pic-imagea">
              <img src={log} alt="logo" />
            </div>
            <div className="head-pa">
              <h2>Time & Material</h2>
              <p>
                We welcome the obscure vision through Time and Material Model
                that supports the Agile Development Process. This is a model
                where the client only pays for the time and resources spent on
                the project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
