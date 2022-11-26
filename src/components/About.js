import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import tree from '../components/images/tree.png'
const About = () => {
  return (
    <div style={{backgroundColor:'red',width:'100%',height:'100vh'}} className=''>
       <Carousel>
                <div>
                    <img style={{width:'200px'}} src={tree} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img width="200px" src={tree} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img width="200px" src={tree} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default About