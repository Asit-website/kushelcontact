// import React from 'react'
// import logo from '../images/logo.png';
// import {Link} from "react-router-dom"
// const Navbar = () => {
//   return (
//     <>
//        <nav className="navbar">
//           <div className="logo">
//               <img src={logo} alt="" />
//           </div>
//           <div className='head'>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About us</Link></li>
//               <li><Link to="/brand">Our Brands</Link></li>
//               <li><Link to="/blog">Blog</Link></li>
//               <li><Link to="/career">Careers</Link></li>
//               <li><Link className='contact' to="/contact">CONTACT US <i className="fa-solid fa-arrow-right"></i></Link></li>
//             </ul>
//           </div>
//        </nav>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
// import './NavBars.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const [navColor,setNavColor]=useState(false)

    const changeNavColor =()=>{
        if(window.scrollY >= 90){
            setNavColor(true)
        }
        else{
            setNavColor(false)
        }

    }

    window.addEventListener('scroll' ,changeNavColor)


    return (
        <div className={navColor ? 'header activeH' : 'header' }>
            <nav className='navbar'>
                <Link to="/" className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<i class="bi bi-x-lg"></i>)
                        : (<i class="bi bi-list"></i>)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" link='/' onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" onClick={closeMenu}>About us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/brand" onClick={closeMenu}>Our Brands</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/blog" onClick={closeMenu}>Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/career" onClick={closeMenu}>Careers</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/contact" class="btn-primary" onClick={closeMenu}>Contact us <i className="fa-solid fa-arrow-right"></i></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar