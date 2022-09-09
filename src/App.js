import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/headers/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Brands from './components/Brands';
import Careers from './components/Careers';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
       <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/brand' element={<Brands/>}/>
                <Route exact path='/blog' element={<Blog/>}/>
                <Route exact path='/career' element={<Careers/>}/>
                <Route exact path='/service' element={<Service/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
       </Router>
    
  )
}

export default App