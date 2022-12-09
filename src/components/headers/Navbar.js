
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png';
// import './NavBars.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const [navColor,setNavColor]=useState(false)
    
    const nav = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'rgb(9, 104, 247)' : '#ffffff',
            transition: isActive ? '0.8s' : '',
            backgroundColor: isActive ? 'black' : 'transparent',
            padding: isActive ? '5px' : '0px',
            opacity: isActive ? '0.8' : '1',
            borderRadius: isActive ? '2px' : '0px',
            overflow:'hidden'
        }
    }

    const navContact = ({ isActive }) => {
        return {
            backgroundColor: isActive ? 'black' : '#0e66f9',
            opacity: isActive ? '0.8' : '1',
            transition: isActive ? '0.8s' : '',
            color: isActive ? 'rgb(9, 104, 247)' : '#ffffff',
            fontWeight: isActive ? 'bold' : 'normal',
            overflow:'hidden'
        }
    }

    const changeNavColor =()=>{
        if(window.scrollY >= 90){
            setNavColor(true)
        }
        else{
            setNavColor(false)
        }

    }

   

   

    window.addEventListener('scroll' ,changeNavColor);

    return (
        <div className={navColor ? 'header activeH' : 'header' }>
            <nav  className='navbar'>
                <NavLink exact  to="/"   className='logo'>
                    <img src={logo} alt='logo' />
                </NavLink>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<i class="fa-solid fa-xmark"></i>)
                        : (<i class="fa-solid fa-bars"></i>)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li  className='nav-item'>
                        <NavLink exact to="/" style={nav} onClick={closeMenu}>Home</NavLink>
                    </li>
                    <li  className='nav-item'>
                        <NavLink to="/about" style={nav} onClick={closeMenu}>About us</NavLink>
                    </li>
                    <li  className='nav-item'>
                        <NavLink to="/brand" style={nav} onClick={closeMenu}>Our Work</NavLink>
                    </li>
                    <li  className='nav-item'>
                        <NavLink  to="/hiring" style={nav}  onClick={closeMenu}>Hire Team</NavLink>
                    </li>
                   

                    <li   className='nav-item'>
                        <NavLink to="/service" style={nav}  onClick={closeMenu}>Services</NavLink>
                    </li>

                    <li   className='nav-item'>
                        <NavLink to="/solution" style={nav}  onClick={closeMenu}>Solutions</NavLink>
                    </li>

                    <li  className='nav-item'>
                        <NavLink  to="/contact" style={navContact}   className="btn-primary"  onClick={closeMenu}>Contact us <i className="fa-solid fa-arrow-right"></i></NavLink>
                    </li>
                    {/* <label class="switch">
          <input onClick={toggleMode} className="chock" type="checkbox" />
          <span class="slider round"></span>
        </label> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar