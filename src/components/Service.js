import React from 'react'
import services from '../components/images/services.png';
import kushelArrow from '../components/images/kushelArrow.png';
import kusta from '../components/images/kusta.png';
import put from '../components/images/put.png'
import game from '../components/images/game.png';
const Service = () => {
  return (
    <div className='kushel-service'>
        <div className="kushel-img">
            <h2>Our</h2>
            <img src={services} alt="services" />
        </div>

        <div className="first-kushel">
           <div className='kushel-first-content'>
              <h2>UI/UX Design</h2>
             
              <div className="kot">
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Interface Design</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Interaction Design</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Research</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Prototyping</p>
                </div>
              </div>
              <div className="kus-img">
                <img src={kushelArrow} alt="kus" />
              </div>
           </div>
           <div className='kushel-second-content'>
              <h2>Graphic Design</h2>
              <div className="kot">
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Illustration Design</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Motion Graphics & Animations</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Broucher Design</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Logo Design</p>
                </div>
              </div>
              <div className="kus-img">
                <img src={kushelArrow} alt="kus" />
              </div>
           </div>
           <div className="kusta-img">
              <img src={kusta} alt="" />
           </div>
        </div>

        <div className="gem-dev">
           <div className="first-game">
              <h2>Game<br/>Development</h2>
              <div className="kot">
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Mobile Game Development</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Web Game Development</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>MMORPG</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>First person - Third person<br/>
shooter</p>
                </div>
              </div>
              <div className="kus-img">
                <img src={kushelArrow} alt="kus" />
              </div>
           </div>
           <div className="second-game">
           <h2>Unity<br/>Development</h2>
              <div className="kot">
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Unity Development</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Unity Synthetic Data</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Unity Computer vision</p>
                </div>

                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Unity Simulation</p>
                </div>
                <div  className="kot-a">
                   <img  src={put} alt="" />
                   <p>Industrial augmented reality</p>
                </div>
              </div>
              <div className="kus-img">
                <img src={kushelArrow} alt="kus" />
              </div>
           </div>
           <div className="game-img">
              <img src={game} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Service