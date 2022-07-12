import React from 'react'
import logo from '../images/logo.png';
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
       <nav className="navbar">
          <div className="logo">
              <img src={logo} alt="" />
          </div>
          <div className='head'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/brand">Our Brands</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/career">Careers</Link></li>
              <li><Link className='contact' to="/contact">CONTACT US <i className="fa-solid fa-arrow-right"></i></Link></li>
            </ul>
          </div>
       </nav>
    </>
  )
}

export default Navbar