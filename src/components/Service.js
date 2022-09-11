import React from 'react'
import services from '../components/images/services.png';
import kushelArrow from '../components/images/kushelArrow.png';
import kusta from '../components/images/kusta.png';
import put from '../components/images/put.png'
import game from '../components/images/game.png';
import app from '../components/images/app.png';
import dagi from '../components/images/dagi.png'
import chota from '../components/images/chota.png'
import research from '../components/images/research.png';
import ui from '../components/images/ui.png'
import int from '../components/images/int.png';
import prot from '../components/images/prot.png'
import web from '../components/images/web.png';
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

        <div className="mobile-app">
           <div className="mobile-app-cl">
              <div className="first-cl">
                 <div className="button-flex">
                 <div className="first-button-flex">
                     <h2>Mobile App</h2>
                     </div>
                     <div className="second-button-flex">
                     <button>Explore all Mobile Services</button>
                     </div>
                 </div>
                  <div className="line-flex">
                     <img className='dai' src={dagi} alt="" />
                     <div className="line-first-flex">
                        <h2 className='dev'>Development</h2>
                        <img className='chota-dai' src={chota} alt="" />
                        <h2 className='anot-dev'>Design</h2>
                     </div>
                     <img className='dai' src={dagi} alt="" />
                  </div>

                  <div className="resarch-flex">
                      <div className="first-res">
                        <img src={research} alt="" />
                       
                      </div>
                      <div className="first-res">
                        <img className='big-int' src={ui} alt="" />
                      
                      </div>
                      <div className="first-res">
                        <img className='ant-int'  src={int} alt="" />
                      </div>
                      <div className="first-res">
                        <img src={prot} alt="" />
                      </div>
                  </div>
              </div>

              <div className="second-cl">
                 <img src={app} alt="" />
              </div>
             
           </div>
           
        </div>

        <div className="web-app">
           <div className="mobile-app-cl">
              <div className="first-cl">
                 <div className="button-flex">
                 <div className="first-button-flex">
                     <h2>Web</h2>
                     </div>
                     <div className="second-button-flex">
                     <button>Explore all Mobile Services</button>
                     </div>
                 </div>
                  <div className="line-flex">
                     <img className='dai' src={dagi} alt="" />
                     <div className="line-first-flex">
                        <h2 className='dev'>Front-end</h2>
                        <img className='chota-dai' src={chota} alt="" />
                        <h2 className='anot-dev'>Back-end</h2>
                        <img className='chota-dai' src={chota} alt="" />
                        <h2 className='anot-dev'>Design</h2>
                     </div>
                     <img className='dai' src={dagi} alt="" />
                  </div>

                  <div className="resarch-flex">
                      <div className="first-res">
                        <img src={research} alt="" />
                       
                      </div>
                      <div className="first-res">
                        <img className='big-int' src={ui} alt="" />
                      
                      </div>
                      <div className="first-res">
                        <img className='ant-int'  src={int} alt="" />
                      </div>
                      <div className="first-res">
                        <img src={prot} alt="" />
                      </div>
                  </div>
              </div>

              <div className="second-cl">
                 <img src={web} alt="" />
              </div>
             
           </div>
           
        </div>

    </div>
  )
}

export default Service