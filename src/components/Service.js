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
import js from '../components/images/js.png';
import webui from '../components/images/webui.png';
import go from '../components/images/go.png';
import webProt from '../components/images/webProt.png';
import ly from '../components/images/ly.png';

import aws from '../components/images/aws.png';
import ku from '../components/images/ku.png';
import gc from '../components/images/gc.png';
import digital from '../components/images/digital.png';
import aza from '../components/images/aza.png';
import rightArrow from '../components/images/rightArrow.png';
import log from "../components/images/log.png";
const Service = () => {
  return (
   <>
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
                   <p>First person - Third person<br/>shooter</p>
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
                        <img src={js} alt="jsa" />
                       
                      </div>
                      <div className="first-res">
                        <img className='big-int' src={webui} alt="web" />
                      
                      </div>
                      <div className="first-res">
                        <img className='ant-int'  src={go} alt="goa" />
                      </div>
                      <div className="first-res">
                        <img className='ant-st'  src={webProt} alt="prota" />
                      </div>
                  </div>
              </div>

              <div className="second-cl">
                 <img src={web} alt="" />
              </div>
             
           </div>
           
        </div>
        <div className="cloud-container">
        <div className="cloud-computing">
            <div className="first-cloud">
               <div className="cloud-button-flex">
                    <div className="cloud-first-button-flex">
                       <h2>Cloud Computing</h2>
                    </div>
                    <div className="cloud-second-button-flex">
                       <button>Explore Cloud Services</button>
                    </div>
               </div>

               <div className="hr-cloud">
                  <img  src={ly} alt="" />
               </div>

               <div className="flex-kot">
                   <div className='kot'>
                   <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Cloud App Development</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Cloud Configuration</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Cloud Integration</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Cloud Security</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Cloud Server Solutions</p>
                </div>
                <div className="kot-a">
                   <img  src={put} alt="" />
                   <p >Cloud Migration</p>
                </div>
                   </div>



                   <div className='kot-images-first'>
                       <div className="firstIm">
                          <img src={aws} alt="awsa" />
                       </div>
                       <div className="secondIm">
                          <img src={ku} alt="kus" />
                       </div>
                       <div className="thirdIm">
                          <img src={gc} alt="gca" />
                       </div>
                   </div>
                   <div className='kot-images-second'>
                        <div className="thirdIm">
                           <img className='aza' style={{opacity:0.9}} src={aza} alt="" />
                           {/* <p>Microsoft Azure</p> */}
                        </div>
                        <div className="fourthIm">
                           <img src={digital} alt="" />
                        </div>
                   </div>
               </div>
            </div>
        </div>
        <div className="other-services">
             <div className="iot">
                 <div className='first-iot'>
                     <p>IOT App <br /> Development</p>
                 </div>
                 <div className="second-iot">
                   <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
             <div className="wearable-app">
                 <div className="first-wear">
                    <p>Wearable App <br /> Development</p>
                 </div>
                 <div className="second-wear">
                   <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
             <div className="ibeacon">
                 <div className="first-i">
                    <p>iBeacon App <br /> Development</p>
                 </div>
                 <div className="second-i">
                 <img src={rightArrow} alt="rightcheck" />
                 </div>
             </div>
        </div>
        </div>

     <div className="submodel">
     <div className="two-div">
          <div className="one-color abs-color">
            <div className="span-group">
              <span>Can’t find a service you are </span>
              <span>looking for?</span>
            </div>
            <button>Explore All Services</button>
          </div>
          <div className="ano-color ans-color">
            <div className="ano-group">
              <span>Want to hire a resource to </span>
              <span>work with you?</span>
            </div>
            <button>Hire team</button>
          </div>
        </div>
        <div className="busta">
        <div className='bus-mod'>
        <h2>BUSINESS MODELS</h2>
        </div>
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
            <h2>Time & Material</h2>
            <p>
              We welcome the obscure vision through Time and Material Model that
              supports the Agile Development Process. This is a model where the
              client only pays for the time and resources spent on the project.
            </p>
          </div>
        </div>
</div>
     </div>

    </div>
  
    </>
    
  )
}

export default Service