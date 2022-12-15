import React from "react";
import Design from "../components/images/DESIGN.png";
import Discover from "../components/images/discover.png";
import drible from "../components/images/drible.png";
import behnce from "../components/images/behnce.png";
import github from "../components/images/github.png";
import canwe from "../components/images/canwe.png";
import tvWatch from "../components/images/tvWatch.png";
import mut from '../components/images/mutation.png';
import check from '../components/images/check.png';
import uiList from '../components/images/uiList.png';
import scroll from '../components/images/Scroll.png';
import scroll1 from '../components/images/scroll1.png';
import personal from '../components/images/personal.png';
import selection from '../components/images/selection.png';
const Uix = () => {
  return (
    <>
      <div className="ui-sir">
        <h2 className="ui-sir-head">UI/UX & Graphics</h2>
        <img src={Design} alt="de" />

        <div className="ui-what">
          <p className="do-ui">What we do</p>
          <div className="ui-what-head">
            <h2>We Design Visually Stunning &</h2>
            <h2>User-Friendly Customer</h2>
            <h2>Experience.</h2>
          </div>
          <div className="ui-what-para">
            <p>
              The Design division at Mindlnventory works as an independent wing
              with a dedicated team
            </p>
            <p>
              of User interface(Ul) Designers, User Experience (UX) Designers,
              Graphic Designers and
            </p>
            <p>Animators.</p>
          </div>
        </div>
      </div>

      <div className="ui-work">
        <div className="ui-work1">
          <p className="ui-work1-small-para">Our Work</p>
          <h2 className="ui-work1-first-head">2500+</h2>
          <p className="deliver-para">Project Deliverd</p>
          <h2 className="ui-work1-first-head ji">1600+</h2>
          <p className="deliver-para">Happy Clients</p>
          <div className="more-work-on">
            <p>More work on</p>
            <div className="git">
              <img src={drible} alt="" />
              <img src={behnce} alt="" />
              <img src={github} alt="" />
            </div>
          </div>
        </div>
        <div className="ui-work2">
          <img src={Discover} alt="" />
        </div>
      </div>
      <div className="expect">
      <div className="ui-help">
        <div className="ui-help1">
          <div className="help-img">
            <img src={canwe} alt="" />
          </div>
          <div className="tv-watch">
            <img src={tvWatch} alt="" />
          </div>
        </div>

        <div className="ui-help2">
          <div className="ui-help-h">
            <h2>Is your product boring?</h2>
            <h2>
              Is your product hard <br />
              to use?
            </h2>
            <h2>
              Can’t entertain your <br />
              users?
            </h2>
            <h2>
              Is your user’s <br />
              productivity low?
            </h2>

            <h2>Is your product boring?</h2>
            <h2>
              Is your product hard <br />
              to use?
            </h2>
          </div>
        </div>
      </div>

      <div className="expect-not">
          <div className="first-ex">
              <h2>Don't Expect</h2>
              <div className="crosover">
                      <img src={mut} alt="" />
                      <p>Template design</p>
              </div>
              <div className="crosover fros">
                      <img src={mut} alt="" />
                      <p>Outsourcing of the work</p>
              </div>
              <div className="crosover fros">
                      <img src={mut} alt="" />
                      <p>Compromised quality</p>
              </div>
              <div className="crosover fros">
                      <img src={mut} alt="" />
                      <p>Endless revisions</p>
              </div>
              <div className="crosover fros">
                      <img src={mut} alt="" />
                      <p>Extended timeline</p>
              </div>
              <div className="crosover fros">
                      <img src={mut} alt="" />
                      <p>Late delivery</p>
              </div>
          </div>
          <div className="second-ex">
              <h2>What to Expect</h2>
              <div className="crosover">
                      <img className="check-images" src={check} alt="" />
                      <p>Custom-tailored design</p>
              </div>
              <div className="crosover fros">
              <img className="check-images" src={check} alt="" />
                      <p>Creative solutions</p>
              </div>
              <div className="crosover fros">
              <img className="check-images" src={check} alt="" />
                      <p>Quality over quantity</p>
              </div>
              <div className="crosover fros">
              <img className="check-images" src={check} alt="" />
                      <p>Streamlined process</p>
              </div>
              
              <div className="crosover fros">
              <img className="check-images" src={check} alt="" />
                      <p>Transparent collaboration</p>
              </div>

              <div className="crosover fros">
              <img className="check-images" src={check} alt="" />
                      <p>Delivery on time</p>
              </div>

          </div>
      </div>
      </div>

      <div className="ui-ux-services">
            <div className="first-ui-ux-services">
                 <p className="service-p">Services</p>
                 <h2>UI/UX for Mobile & <br />Web</h2>
                 <div className="ui-ux-par">
                  <p className="first-par">We follow industry standards and create UI/UX based on</p>
                  <p className="first-par">design guidelines. UI/UX design services we offer include:</p>
                 </div>
                 <div className="uturn">
                 <div className="ui-ux-list">
                      <img src={uiList} alt="" />
                      <p>UI Design</p>
                 </div>
                 <div className="ui-ux-list">
                      <img src={uiList} alt="" />
                      <p>UI Design</p>
                 </div>
                 <div className="ui-ux-list">
                      <img src={uiList} alt="" />
                      <p>Interaction Design</p>
                 </div>
                 <div className="ui-ux-list">
                      <img src={uiList} alt="" />
                      <p>Prototyping</p>
                 </div>
                 </div>
            </div>
            <div className="ye">
            <div className="second-ui-ux-services">
                 <img src={scroll} alt="" />
                 <img src={scroll} alt="" />
                 {/* <div className="img-ui-group">
                    <img className="personal"  src={personal} alt="" />
                    <img className="selection" src={selection} alt="" />
                 </div> */}
            </div>
            </div>
      </div>

    
      <div className="ui-ux-services graphic-services">
            <div className="first-ui-ux-services">
                 <p className="service-p">Services</p>
                 <h2>Graphic Design</h2>
                 <div className="ui-ux-par">
                  <p className="first-par">We create engaging content and meaningful experience</p>
                  <p className="first-par">for your target audience. Graphic design services we offer</p>
                 </div>
                 <div className="uturn">
                 <div className="ui-ux-list">
                      <img src={uiList} alt="" />
                      <p>Illustrations</p>
                 </div>
                 <div className="ui-ux-list">
                      <img src={uiList} alt="" />
                      <p>Logo Design</p>
                 </div>
                 <div className="ui-ux-list">
                      <img src={uiList} alt="" />
                      <p>Icon Design</p>
                 </div>
                 <div className="ui-ux-list">
                      <img src={uiList} alt="" />
                      <p>Motion Graphics & Animations</p>
                 </div>
                 </div>
            </div>
            <div className="ye">
            <div className="second-ui-ux-services">
                 <img src={scroll1} alt="" />
                 <img src={scroll1} alt="" />
                 {/* <div className="img-ui-group">
                    <img className="personal"  src={personal} alt="" />
                    <img className="selection" src={selection} alt="" />
                 </div> */}
            </div>
            </div>
      </div>
     
       <div className="discus-project">
       <div class="tech-div tech-div2 tech-div3"><h2>Let’s Discuss Your Project</h2><div class="tech-para"><p>Get free consultation and let us know your project idea to turn it into an amazing digital <br/> product.</p></div><a class="" href="/about"><button class="tech-btn">About us</button></a></div>
       </div>
     
      
    </>
  );
};

export default Uix;
