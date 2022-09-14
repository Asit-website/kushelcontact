import React, { useRef, useState } from "react";
import XdApi from "./serviceApi/XdApi";
import techApi from "./technologyApi/techApi";
import industryApi from "./industryApi/industryApi";
import mask from "../components/images/mask.png";
import laptop from "../components/images/laptop.png";
import apple from "../components/images/apple.png";
import arrow from "../components/images/arrow-right.png";
import tech from "../components/images/tech.png";
import coin from "../components/images/coin.png";
import dash from "../components/images/dash.png";
import solution from "../components/images/Solutions.png";
import mobile from "../components/images/mobile.png";
import logoa from "../components/images/logoa.png";
import log from "../components/images/log.png";
import man2 from "../components/images/man2.png";
import hand from "../components/images/hand.png";
import hand2 from "../components/images/hand2.png";
import girl from '../components/images/girl.png';

import imageApi from "./imageApi/imageApi";
import imageAnotherApi from "./imageApi/imageAnotherApi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
// import pre from '../components/pre.png';

const swiperApi = [
  {
    id:1,
    Para:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet velit finibus, mollis lorem non, iaculis augue. Phasellus mi urna, commodo sit amet tellus non, consectetur consequat quam. ',
    image1:'images/man2.png',
    image2:'images/hand.png',
    Name1:'Harriet Mitchell',
    Name2:'Director of Inbrew'


  }
]
const Home = () => {
  return (
    <>
      <div class="banner">
      <div className="imgs">
          <img src={girl} alt="notGirl" />
          </div>
        <div class="content">
          <strong>Welcome to Kushel Digi</strong>
          <h2>
            IT Consulting Services For <br /> Your Buisiness
          </h2>
          <p>
            We are leading technology solutions providing company all over the
            world doing over 40 years.
          </p>
          <button className="home_btn">Read more</button>
        </div>
      </div>
      {/* // ==========more info section=============== */}
      <div className="partner">
        <div className="first_partner">
          <img src="./images/23.png" alt="noting" />
        </div>
        <div className="second_partner">
          <div className="second_all">
            <span>Who we are</span>
            <h2>
              Your digital partner to create inspirational design and robust
              solution for Web, Mobile & <br /> Cloud.
            </h2>
            <p>
              The top-notch and preeminent Web and Mobile App Development
              Company of India with its global presence in USA, MindInventory is
              first-rate choice of the clients worldwide. With sheer customer
              satisfaction in mind, we are profoundly dedicated to developing
              highly intriguing apps that strictly meet the business
              requirements and catering a wide spectrum of projects.
            </p>

            <Link to="/about">
              <button className="who_btn">About us</button>
            </Link>
          </div>
        </div>
      </div>

      {/* ==========services================  */}
      <div className="services">
        <span>Our Services</span>
        <div className="heading-service">
          <h2>We are leading technology solutions providing company </h2>
          <h2> all over the world doing over 40 years.</h2>
        </div>

        <div className="development_service">
          <div className="section-service">
            <div className="first-service">
              <div className="three-section-first">
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
            <div className="second-service">
              <div className="three-section-second">
                <img className="second-im" src={laptop} alt="lapi" />
                <p>UI & UX Design</p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
            <div className="third-service">
              <div className="three-section-third">
                <img className="third-im" src={apple} alt="" />
                <p>App Development</p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
                {/* <i className="fa-solid fa-arrow-right-long"></i> */}
              </div>
            </div>
          </div>

          <div className="service-content">
            <p>
              With a decade-long experience in UI/UX designing, our creative
              team of designers offers a full range of web and mobile app design
              services, from prototyping and graphic design to pixel-perfect UI.
            </p>
          </div>

          <div className="another-xd">
            {XdApi.map((val) => {
              return <img key={val.id} src={val.Name} alt="" />;
            })}
          </div>
        </div>
      </div>

      {/* ===========technology================= */}
      <div className="technology">
        <img src={tech} alt="" />
        <div className="tech-image">
          {techApi.map((val) => {
            const { id, Name, width } = val;
            return <img key={id} style={{ width: width }} src={Name} alt="" />;
          })}
        </div>
        <div className="tech-div">
          <h2>Let’s Discuss Your Project</h2>
          <div className="tech-para">
            <p>
              Get free consultation and let us know your project idea to turn it
              into{" "}
            </p>
            <p>an amazing digital product.</p>
          </div>
          <Link to="/about">
            <button className="tech-btn">About us</button>
          </Link>
        </div>
      </div>

      {/* ==========latest project============== */}
      <div className="project">
        <span>Our Latest Project</span>
        <div className="project-heading">
          <h2>We design project designed with passion on time,</h2>
          <h2>within budget of full value</h2>
        </div>

        <div className="project-images">
          <img src={dash} alt="das" />
          <img src={coin} alt="con" />
        </div>
        <Link to="#!">
          {" "}
          <button className="project-btn">View Portfolio</button>
        </Link>
      </div>

      {/* ============industry wise============= */}
      <div className="industry">
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
              <img src={mobile} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ============business model================ */}
      <div className="business">
        <h2>BUSINESS MODELS</h2>
        <div className="three-business">
          <p className="first-b">Time & Material</p>
          <p className="second-p">Hire Team</p>
          <p className="third-p">Fix Scope Model</p>
        </div>

        <div className="pic-para">
          <div className="pic-imagea">
            <img src={log} alt="" />
          </div>
          <div className="head-pa">
            <h2 >Time & Material</h2>
            <p>
              We welcome the obscure vision through Time and Material Model that
              supports the Agile Development Process. This is a model where the
              client only pays for the time and resources spent on the project.
            </p>
          </div>
        </div>

        <div className="two-div">
          <div className="one-color">
            <div className="span-group">
              <span>Can’t find a service you are </span>
              <span>looking for?</span>
            </div>
            <button>Explore All Services</button>
          </div>
          <div className="ano-color">
            <div className="ano-group">
              <span>Want to hire a resource to </span>
              <span>work with you?</span>
            </div>
            <button>Hire team</button>
          </div>
        </div>
      </div>

      {/* ============reviews=============== */}

      <div className="reviews">
        <span>Our Reviews</span>
        <h2>Why do people praise about Technogenius?</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="big-div">
            <div className="swift-js">
              <div className="swifter-js">
                <img src={man2} />
                <div className="swifter-para">
                <img src={hand} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet velit finibus, mollis lorem non, iaculis
                  augue. Phasellus mi urna, commodo sit amet tellus non,
                  consectetur consequat quam.{" "}
                </p>
                <div className="first-strong">Harriet Mitchell</div>
                <div className="first-para">Director of Inbrew</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="big-div">
            <div className="swift-js">
              <div className="swifter-js">
               
                  <img src={man2} />
              
                <div className="swifter-para">
                <img src={hand2} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent sit amet velit finibus, mollis lorem non, iaculis
                    augue. Phasellus mi urna, commodo sit amet tellus non,
                    consectetur consequat quam.
                  </p>
                  <div className="first-strong">Harriet Mitchell</div>
                <div className="first-para">Director of Inbrew</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="big-div">
            <div className="swift-js">
              <div className="swifter-js">
                <img src={man2} />
                <div className="swifter-para">
                <img src={hand2} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sit amet velit finibus, mollis lorem non, iaculis
                  augue. Phasellus mi urna, commodo sit amet tellus non,
                  consectetur consequat quam.{" "}
                </p>
                <div className="first-strong">Harriet Mitchell</div>
                <div className="first-para">Director of Inbrew</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="second-span">Our Clients</div>
        <section className="two-jon">
        <div className="section-image">
        {
          imageAnotherApi.map(val=>{
            return(
              <>
              <div key={val.id} className="secta1">
            <div className={val.Class}></div>
            <img style={{width:val.width}} src={val.image}alt="" />
            </div>
              </>
            )
          })
        }
        </div>
       
        <div className="section-imagea">

        {
          imageApi.map(val=>{
            return(
              <>
              <div key={val.id} className="secta5">
            <div className={val.Class}></div>
            <img style={{width:val.width}} src={val.image} alt="" />
            </div>
              </>
            )
          })
        }
        </div>
        </section>
      </div>
      
    </>
  );
};

export default Home;
