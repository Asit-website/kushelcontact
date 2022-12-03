import React, { useRef, useState } from "react";
import XdApi from "./serviceApi/XdApi";
import techApi from "./technologyApi/techApi";
import mask from "../components/images/mask.png";
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
import digia from '../components/images/digia.png';
import emotions from '../components/images/emotions.png';
import php1 from '../components/images/php1.png';
import nodejs1 from '../components/images/node-js.png';
import mongodb1 from '../components/images/mongodb1.png';
import sqlite from '../components/images/sqlite.png';
import dhanda from '../components/images/dhanda.png';
import physics from '../components/images/physics.png';
import anis from '../components/images/anis.png';
import anis1 from '../components/images/anis1.png';
import swift from '../components/images/swift.png';
import seo1 from '../components/images/seo1.png';
import meta1 from '../components/images/meta1.png';
import insta2 from '../components/images/insta2.png';
import adwords from '../components/images/adwords.png';
import wordpress1 from '../components/images/wordpress1.png';
import magento1 from '../components/images/magento1.png';
import nipta from '../components/images/nipata.png';
import shopify1 from '../components/images/shopify1.png';
import nipta1 from '../components/images/nipta1.png';
import techAnotherApi from "./technologyApi/teachAnotherApi";
import imageApi from "./imageApi/imageApi";
import imageAnotherApi from "./imageApi/imageAnotherApi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper";
import { NavLink } from "react-router-dom";
// import pre from '../components/pre.png';






const Home = () => {

  const [link,setLink] = useState(1);
  const [men,setMen] = useState(1);

  const [save,setSaved] = useState(false);

  const css = {
    borderBottom:"2px solid #ffffff",
    opacity:"1"
  }
 
  const secondCss = {
    borderBottom:"none",
    opacity:"0.6"
  }
  const time = (e) =>{
    e.preventDefault();
    setLink(1);
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
 
 const hired = (e) =>{
   e.preventDefault();
   setLink(2);
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
 
 const fix = (e) =>{
   e.preventDefault();
   setLink(3);
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

 const css1 = {
  color:"#0e66f9"
 }
 const secondCss1 = {
  color:'#ffffff'
 }

  const menu1 = (e) =>{
     e.preventDefault();
     setMen(1);
     for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("bar").style[prop] = css1[prop];
    }
  }

  const menu2 = (e) =>{
    e.preventDefault();
    setMen(2);
    for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("tam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const menu3 = (e) =>{
    e.preventDefault();
    setMen(3);
    for (var prop in css1) {
      document.getElementById("cam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const menu4 = (e) =>{
    e.preventDefault();
    setMen(4);
    for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("dam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const menu5 = (e) =>{
    e.preventDefault();
    setMen(5);
    for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("eam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const menu6 = (e) =>{
    e.preventDefault();
    setMen(6);
    for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("fam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const menu7 = (e) =>{
    e.preventDefault();
    setMen(7);
    for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("gam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const menu8 = (e) =>{
    e.preventDefault();
    setMen(8);
    for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("ham").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const menu9 = (e) =>{
    e.preventDefault();
    setMen(9);
    for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("iam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const menu10 = (e) =>{
    e.preventDefault();
    setMen(10);
    for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("jam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const menu11 = (e) =>{
    e.preventDefault();
    setMen(11);
    for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("kam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("lam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const menu12 = (e) =>{
    e.preventDefault();
    setMen(12);
    for (var prop in secondCss1) {
      document.getElementById("cam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("tam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("dam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("eam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("fam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("gam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("ham").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("iam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("jam").style[prop] = secondCss1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("kam").style[prop] = secondCss1[prop];
    }
    for (var prop in css1) {
      document.getElementById("lam").style[prop] = css1[prop];
    }
    for (var prop in secondCss1) {
      document.getElementById("bar").style[prop] = secondCss1[prop];
    }
  }

  const [grad,setGrad] = useState(1);

  const setChange = (e) =>{
      e.preventDefault();
      setGrad(1);
      document.getElementById("ask").style.background="linear-gradient(to bottom, #F3670E, #F5B307) border-box";
      document.getElementById("ask").style.borderImage="none";
      document.getElementById("bsk").style.background="none";
      document.getElementById("bsk").style.borderImage="linear-gradient(#29b12b, #33ead7) 1";
     
  }
  const setChange1 = (e) =>{
    e.preventDefault();
    setGrad(2);
    document.getElementById("bsk").style.background="linear-gradient(to bottom, #29B22D, #29B22D,#24D968) border-box";
    document.getElementById("bsk").style.borderImage="none";
    document.getElementById("ask").style.borderImage="linear-gradient(#FDCB2C, #F9863F) 1";
    document.getElementById("ask").style.background="none"
  }

  const setChange2 = (e) =>{
      e.preventDefault();
      setGrad(3);
      document.getElementById("csk").style.background="linear-gradient(to bottom, #0B9A44, #0A7E12) border-box";
      document.getElementById("csk").style.borderImage="none";
      document.getElementById("dsk").style.borderImage="linear-gradient(#F752B0, #A400FF) 1";
      document.getElementById("dsk").style.background="none"
  }

  const setChange3 = (e) =>{
     e.preventDefault();
     setGrad(4);
     document.getElementById("dsk").style.background="linear-gradient(to bottom, #BF00FF, #280334) border-box";
     document.getElementById("dsk").style.borderImage="none";
     document.getElementById("csk").style.background="none";
     document.getElementById("csk").style.borderImage="linear-gradient(#29b12b, #33ead7) 1";

  }

  const savedCss = {
    display: save ? 'flex' : 'none'
  }

  const setButton = (e) =>{
      setSaved(!save);
      setTimeout(() => {
         document.querySelector(".button-chu").style.display="none"
      }, 1000);
  }

  return (
    <>
      <div class="banner">
      <div className="imgs">
          <img src={girl} alt="notGirl" />
          </div>
        <div class="content">
          <span>Welcome to Kushel Digi</span>
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

            <NavLink to="/about">
              <button className="who_btn">About us</button>
            </NavLink>
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
        <Carousel>
        
        <div className="section-service">
            <div className="first-service">
              <div onClick={setChange} id="ask" className="three-section-first">
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
              <div onClick={setChange1} id="bsk" className="three-section-third">
                <img className="third-im" src={apple} alt="" />
                <p>App Development</p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
           
            {/* <div className="third-service">
              <div className="three-section-third">
                <img className="third-im" src={apple} alt="" />
                <p>App Development</p>
                <img
                  style={{ width: "20px", margin: "0px -1px" }}
                  src={arrow}
                  alt=""
                />
              </div>
            </div> */}
          </div>

          <div className="section-service">
            <div className="second-service">
              <div onClick={setChange2} id="csk" className="three-section-second">
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
              <div onClick={setChange3} id="dsk" className="three-section-fourth">
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
        </Carousel>
            {
              grad === 1 && (
                <>
                <div>
          <div className="service-content">
            <p>
              With a decade-long experience in UI/UX designing, our creative
              team of designers offers a full range of web and mobile app design
              services, from prototyping and graphic design to pixel-perfect UI.
            </p>
          </div>

          <div className="another-xd">
            {/* {XdApi.map((val) => {
              return <img key={val.id} src={val.Name} alt="" />;
            })} */}

            <img src={php1} alt="" />
            <img src={nodejs1} alt="" />
            <img src={mongodb1} alt="" />
            <img src={sqlite} alt="" />
            <img src={dhanda} alt="" />
          </div>
          </div>
                </>
              )
            }

            {
              grad === 2 && (
                <>
                <div>
          <div className="service-content">
            <p>
              With a decade-long experience in UI/UX designing, our creative
              team of designers offers a full range of web and mobile app design
              services, from prototyping and graphic design to pixel-perfect UI.
            </p>
          </div>

          <div className="another-xd">
            {/* {XdApi.map((val) => {
              return <img key={val.id} src={val.Name} alt="" />;
            })} */}

            <img src={physics} alt="" />
            <img src={anis} alt="" />
            <img src={anis1} alt="" />
            <img src={swift} alt="" />
            
          </div>
          </div>
                </>
              )
            }

            {
               grad === 3 && (
                <>
                <div>
          <div className="service-content">
            <p>
              With a decade-long experience in UI/UX designing, our creative
              team of designers offers a full range of web and mobile app design
              services, from prototyping and graphic design to pixel-perfect UI.
            </p>
          </div>

          <div className="another-xd">
            {/* {XdApi.map((val) => {
              return <img key={val.id} src={val.Name} alt="" />;
            })} */}

            <img src={seo1} alt="" />
            <img src={meta1} alt="" />
            <img src={insta2} alt="" />
            <img src={adwords} alt="" />
            
          </div>
          </div>
                </>
               )
            }

            {
              grad === 4 && (
                <>
                <div>
          <div className="service-content">
            <p>
              With a decade-long experience in UI/UX designing, our creative
              team of designers offers a full range of web and mobile app design
              services, from prototyping and graphic design to pixel-perfect UI.
            </p>
          </div>

          <div className="another-xd">
            {/* {XdApi.map((val) => {
              return <img key={val.id} src={val.Name} alt="" />;
            })} */}

            <img src={wordpress1} alt="" />
            <img src={magento1} alt="" />
            <img src={nipta} alt="" />
            <img src={shopify1} alt="" />
            <img src={nipta1} alt="" />
          </div>
          </div>
                </>
              )
            }
         
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
        
        <div style={savedCss} className="tech-image">
          {techAnotherApi.map((val) => {
            const { id, Name, width } = val;
            return <img key={id} style={{ width: width }} src={Name} alt="" />;
          })}
        </div>
        <button onClick={setButton} className="button-chu">see More</button>
        <div className="tech-div">
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
        <NavLink to="#!">
          {" "}
          <button className="project-btn">View Portfolio</button>
        </NavLink>
      </div>

      {/* ============industry wise============= */}
      <div className="industry">
        <h2>Our Industry wise</h2>
        <img src={solution} alt="nothing" />

        <div className="industry-system">
          <div className="small-fintech">
            <span id="bar" onClick={menu1}>Fintech</span>
            <div className="fintech-para">
              <p id="tam" onClick={menu2}>E-Commerce</p>
              <p id="cam" onClick={menu3}>Healthcare</p>
              <p id="dam" onClick={menu4}>Fitness</p>
              <p id="eam" onClick={menu5}>Food Delivery</p>
              <p id="fam" onClick={menu6}>Real Estate</p>
              <p id="gam" onClick={menu7}>Travel</p>
              <p id="ham" onClick={menu8}>Sports</p>
              <p id="iam" onClick={menu9}>Social Networking</p>
              <p id="jam" onClick={menu10}>Business</p>
              <p id="kam" onClick={menu11}>Education</p>
              <p id="lam" onClick={menu12}>Entertainment</p>
            </div>
          </div>

          {
            men === 1 && (
              <>
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
              </>
            )
          }
         {
          men === 2 && (
            <>
            <div className="big-fintech">
            <span>E-Commerce</span>
            <div className="big-fintch-para">
              <p>Make your customers digital banking and investing </p>
              <p>
                experience smooth without irritation like banking long queue.
              </p>
            </div>
            <div className="disc">
              <ul style={{ listStyle: "none" }}>
                <li>Easy Money Transfers</li>
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
            </>
          )
         }
         {
           men === 3 && (
            <>
            <div className="big-fintech">
            <span>Healthcare</span>
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
            </>
           )
         }
        {
          men === 4 && (
            <>
            <div className="big-fintech">
            <span>Fitness</span>
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
            </>
          )
        }
        {
          men === 5 && (
            <>
            <div className="big-fintech">
            <span>Food Delivery</span>
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
            </>
          )
        }
        {
          men === 6 && (
            <>
            <div className="big-fintech">
            <span>Real Estate</span>
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
            </>
          )
        }
        {
          men === 7 && (
            <>
            <div className="big-fintech">
            <span>Travel</span>
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
            </>
          )
        }
        {
          men === 8 && (
            <>
            <div className="big-fintech">
            <span>Sports</span>
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
            </>
          )
        }
        {
          men === 9 && (
            <>
            <div className="big-fintech">
            <span>Social Networking</span>
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
            </>
          )
        }
        {
          men === 10 && (
            <>
          
            <div className="big-fintech">
            <span>Business</span>
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
          
            </>
          )
        }
        {
          men === 11 && (
            <>
            <div className="big-fintech">
            <span>Education</span>
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
          
            </>
          )
        }
        {
          men === 12 && (
            <>
            <div className="big-fintech">
            <span>Entertainment</span>
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
          
            </>
          )
        }
        </div>
      </div>

      {/* ============business model================ */}
      <div className="business">
        <h2>BUSINESS MODELS</h2>
        <div className="three-business">
          <p id="barier" onClick={time} className="first-b">Time & Material</p>
          <p id="camp" onClick={hired} className="second-p">Hire Team</p>
          <p id="tamp" onClick={fix} className="third-p">Fix Scope Model</p>
        </div>
         {
          link === 1 && (
             <>
             <div className="pic-para">
          <div className="pic-imagea">
            <img src={log} alt="logo" />
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
             </>
          )
         }

         {
          link === 2 && (
            <>
            <div className="pic-para">
          <div className="pic-imagea">
            <img src={log} alt="logo" />
          </div>
          <div className="head-pa">
            <h2 >Hire Team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolore nobis deleniti nostrum? Iste maxime at omnis molestias nulla cum eius temporibus rerum. Maxime omnis delectus voluptatem repudiandae, itaque consequuntur.
            </p>
          </div>
        </div>
            </>
          )
         }
      

         {
          link === 3 && (
            <>
            <div className="pic-para">
          <div className="pic-imagea">
            <img src={log} alt="logo" />
          </div>
          <div className="head-pa">
            <h2>Fix Scope Model</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ad, impedit fugit similique dolor aperiam obcaecati, deserunt veniam quam eum exercitationem at nihil dolorum? Reiciendis neque quisquam eius in repellat 
            </p>
          </div>
        </div>
            </>
          )
         }

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
