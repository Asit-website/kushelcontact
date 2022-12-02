import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/headers/Navbar';
import Home from './components/Home';
import About from './components/About';
// import Blog from './components/Blog';
import Brands from './components/Brands';
import Solution from './components/Solution';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';
import NotFound from './components/NotFound';
import Privacy from './components/Privacy';
import Refund from './components/Refund';
import Quality from './components/Quality';
import Nda from './components/Nda';
import TermCondition from './components/TermCondition';
import HireTeam from './components/HireTeam';
const App = () => {
  return (
       <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/brand' element={<Brands/>}/>
                <Route exact path='/hiring' element={<HireTeam/>}/>
                <Route exact path='/service' element={<Service/>}/>
                <Route exact path='/solution' element={<Solution/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/privacy' element={<Privacy/>}/>
                <Route exact path='/refund' element={<Refund/>}/>
                <Route exact path='/quality' element={<Quality/>}/>
                <Route exact path='/nda' element={<Nda/>}/>
                <Route exact path='/term' element={<TermCondition/>}/>
                <Route exact path="*" element={<NotFound/>} />
            </Routes>
            <Footer/>
       </Router>
    
  )
}

export default App