import React from "react";
import Navbar from '../components/Navbar'
import cover from "../assets/home_assets/HOME PAGE COVER IMAGE.png";
import background from "../assets/home_assets/Rectangle 632.png";
import whatsapp from "../assets/home_assets/whatsapp.jpg";
import call from "../assets/home_assets/call.png";
import our_vision_section1 from "../assets/home_assets/OUR_VISION_SECTION_1.png";
import our_vision_section2 from "../assets/home_assets/OUR_VISION_SECTION_2.png";
import our_vision_section3 from "../assets/home_assets/OUR_VISION_SECTION_3.png";
import teific_logo from "../assets/home_assets/teific.png";
import know_more_top_left from "../assets/home_assets/thubnail.png";
import know_more_top_right from "../assets/home_assets/icon 3 1.png";
import know_more_bottom_left from "../assets/home_assets/icon 2 2.png";
import know_more_bottom_right from "../assets/home_assets/rescue-3735206_1920.jpg";
import why_choose_us_upper_left from "../assets/home_assets/know_upper.png";
import why_choose_us_upper_right from "../assets/home_assets/fast-time 1.png";
import why_choose_us_lower_left from "../assets/home_assets/w6 2.png";
import why_choose_us_lower_right from '../assets/home_assets/ambulance.png';
import coming_soon_app from '../assets/home_assets/mobile_view.png';
import why_we_come_upper_left from '../assets/home_assets/1.jpeg'
import why_we_come_upper_mid from '../assets/home_assets/2.jpeg'
import why_we_come_upper_right from '../assets/home_assets/3.png'
import why_we_come_lower from '../assets/home_assets/4.jpeg'
import {Parallax} from 'react-parallax'
import { motion } from 'framer-motion'
import { fadeIn } from "../variant"
import pic from "../assets/home_assets/our_vision.png"
import { TypeAnimation } from 'react-type-animation'
import back from '../assets/home_assets/background.png'
import user from '../assets/home_assets/WhatsApp Image 2023-09-22 at 16.00.55.jpg'
import instagram from '../assets/home_assets/instagram.png'
import linkedin from '../assets/home_assets/linkedin.png'
import twitter from '../assets/home_assets/twitter.png'
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "./Home.css"


 




const Home = () =>{
    return(
        <>
        <Navbar/>
        <section style={{marginTop:'9vh'}}>
    
{/* <!-- nav bar ends here --> */}
{/* <!-- first section --> */}
<div className="First-section">
  {/* div for the right image and background  */}
      <motion.div 
        variants={fadeIn('down',0.3)} 
        initial="hidden"
        whileInView={'show'} 
        className="right">
                  <img className="am" src={cover}  alt="ambulance"/> 
                  <img id="bg" src={background} alt="Background"/> 
      </motion.div>
  {/* div for left text and facts button  */}
      <motion.div  
        variants={fadeIn('down',0.3)} 
        initial="hidden"
        whileInView={'show'}
        className="left">
                <a href="/inactive url" id="ambuvians">AMBUvians</a>
                <a href="/inactive url" id="slogan">India's First One-Stop Solution of all medical problems</a>
                <button id="facts">FACTS</button>
      </motion.div>

</div>
   
 
   
{/* <!-- first section ends here --> */}
{/* <!-- reach-out section fixed in the bottom left corner --> */}
    <div className="whatsapp">
        <img src={whatsapp} alt="whatsapp"/>
        <img src={call} alt="call" id="call"/>
    </div>
{/* <!-- reach-out section ends here --> */}
{/* <!-- Our vision section --> */}
<Parallax strength={400} bgImage={pic}>
    <div className="vision">
        <a href="/inactive url" id="our-vision">OUR VISION</a>
        <div className="vision_img">
            <div className="section">
              <div className="sectioncard">
                <div className="sectionfront">
                  <img src={our_vision_section1} alt=""/>
                  <a href="/inactive url" id="section-upper-text">INDIA's best</a>
                  <a href="/inactive url" id="section-lower-text">Medical SERVICE</a>
                </div>
                <div className="sectionback">
                We provide comprehensive medical services with care and dedication. Trust us for your well-being and a better life.
                </div>
              </div>
            </div>
            <div className="section">
              <div className="sectioncard">
                <div className="sectionfront">
                  <img src={our_vision_section2} alt=""/>
                  <a href="/inactive url" id="section-upper-text">Saving Life</a>
                  <a href="/inactive url" id="section-lower-text">with Perfection</a>
                </div>
                <div className="sectionback">
                We recognize the immense value of every life and the need for precise healthcare. Our expert tech team delivers excellence through technology at Ambuvians.
                </div>
              </div>
            </div>
            <div className="section">
              <div className="sectioncard">
                <div className="sectionfront">
                  <img src={our_vision_section3} alt=""/>
                  <a href="/inactive url" id="section-upper-text">Economical and</a>
                  <a href="/inactive url" id="section-lower-text">Fastest</a>
                </div>
                <div className="sectionback">
                We seamlessly blend cost-efficiency and speed with our tech-driven Fast-Track solutions, saving lives.

                </div>
              </div>
            </div>
        </div>
    </div>
    </Parallax>
{/* <!-- our vision section ends here --> */}
{/* <!-- know more section --> */}
    <div className="knowmore">
      <div className="know">
        <img  id="one" src={know_more_top_left} alt=""/>
        <img  id="two" src={know_more_top_right} alt=""/>
        <img  id="three" src={know_more_bottom_left} alt=""/>
        <img style={{
            borderRadius:'15px 0 0 0'
          }} id="four" src={know_more_bottom_right} alt=""/>
        <Link to="/services">
        <button id="more">Know more</button>
        </Link>
      </div>
    </div> 
{/* <!-- Why choose us section --> */}
    <motion.div variants={fadeIn('up',0.3) } 
          initial="hidden"
          whileInView={'show'} className="choose">
      <a href="/inactive url" id="why_us">Why Choose Us?</a>
      <div className="low">
        <div className="partone">
          <div className="one">
            <abbr><img src={why_choose_us_upper_left} alt=""/></abbr>
            <a href="/inactive url">Patient is our first priority</a>
          </div>
          <div className="two">
            <abbr><img src={why_choose_us_upper_right} alt=""/></abbr>
            <a href="/inactive url">Emergency response time <br/>of 15 minutes or less</a>
          </div>
        </div>
        <div className="parttwo">
          <div className="three">
            <abbr ><img src={why_choose_us_lower_left} alt=""/></abbr>
            <a href="/inactive url">24/7 Support</a>
          </div>
          <div className="four">
            <abbr ><img src={why_choose_us_lower_right} alt=""/></abbr>
            <a href="/inactive url">Customise and Reliable <br/>Ambulance Service</a>
          </div>
        </div>
      </div>
    </motion.div>
{/* <!-- Why choose us section ends here   --> */}
{/* <!-- coming soon --> */}
    <div className="coming">
      <div className="left_img">
        <img src={coming_soon_app} alt=""/>
      </div>
      <TypeAnimation sequence={["COMING SOON ",1500,"CHECK OUT ",1500]} speed={5} className="right_txt" repeat={Infinity}>
      </TypeAnimation>
    </div>
{/* <!-- coming soon section ends here --> */}
{/* <!-- Why we come section --> */}

    {/* <motion.div variants={fadeIn('left',0.3)} 
          initial="hidden"
          whileInView={'show'} className="come">
    </motion.div> */}
    <div class="come" style={{opacity: '1', transform: 'none'}}>
      <a href="/inactive url">Why We Come</a>
    </div>
      
    {/* <motion.div variants={fadeIn('left',0.3)} 
          initial="hidden"
          whileInView={'show'} className="whywecome"> */}
      <div className="news1">
        <img src={why_we_come_upper_left} alt=""/>
        <img src={why_we_come_upper_mid} alt=""/>
        <img src={why_we_come_upper_right} alt=""/>
      </div>
      <div className="news2">
        <img src={why_we_come_lower} alt=""/>
      </div>
    {/* </motion.div> */}
{/* <!-- why we come section ends here --> */}
{/* <!-- director's note --> */}
<Parallax strength={400}>
    <motion.div variants={fadeIn('right',0.3)} 
          initial="hidden"
          whileInView={'show'} className="note">
            
      <div className="leftnote">
        <div className="card">
          <div className="front">
            <img className="director" src={user} alt="yash kumar goel" />
          </div>
          <div className="back">
            <img src={back} alt="" className="director-back" />
            
            <abbr title="instagram" className="first-icon">
            <a href="https://www.instagram.com/official.ambuvians/" target="_blank">
              <img style={{
                height:'40px',
                width:'35px',
                marginLeft:'8px'
              }} loading="lazy" src={instagram} alt="Insta" />
            </a>
          </abbr>

          {/* WhatsApp */}
          <abbr title="whatsapp" className="second-icon">
            <a href="https://wa.me/+7505853812" target="_blank">
              <img style={{
                height:'40px',
                width:'35px',
                marginLeft:'8px'
              }} loading="lazy" src={whatsapp} alt="wapp" />
            </a>
          </abbr>

          {/* Twitter */}
          <abbr title="twitter" className="third-icon">
            <a href="/">
              <img style={{
                height:'40px',
                width:'35px',
                marginLeft:'8px'
              }} loading="lazy" src={twitter} alt="ssss" />
            </a>
          </abbr>

          {/* LinkedIn */}
          <abbr title="linkedin" className="fourth-icon">
            <a href="https://www.linkedin.com/company/ambuvians-healthcare-pvt-ltd/?viewAsMember=true" target="_blank">
              <img style={{
                height:'40px',
                width:'35px',
                marginLeft:'8px'
              }} loading="lazy" src={linkedin} alt="ssss" />
            </a>
          </abbr>
          </div>
        </div>
      </div>
      <div className="rightnote">
        <a href="/inactive url" id="dir">Director's Note</a>
        <a href="/inactive url" id="yash">Dr. Rahat Ullah Khan</a>
        {/* <a href="/inactive url" id="ed">Founder & Executive Director</a> */}
        <a href="/inactive url" id="aim">Imagine the sky as your limit, yet even that is a self-imposed boundary.
        Ambuvians Healthcare Defies limit Daily, pushing medical Frontier. Let your potential soar; Ambuvians proves that even the clouds are meant to be surpassed. 
        </a>
        <a href="/inactive url" id="good">"The Only Limits That Exist are the ones you Place on yourself, Break Free , Aim high and Defy your own Expectations"</a>
        <a href="/inactive url" id="mr">-Dr. Rahat Ullah Khan</a>
      </div>
{/* <!-- director's note ends here --> */}
{/* <!-- Our partners --> */}
    </motion.div></Parallax>

    <div className="ourPartners">
      <a href="/inactive url">Our Partners</a>
    </div>
    <div className="partners">
      <a href="https://www.teific.in"><img src={teific_logo} alt=""/></a>
      
      {/* <img src={carzilla_logo} alt=""/> */}
    </div>
    {/* <!-- our partners section ends here --> */}
    {/* <!-- Subscribe to our mail --> */}
    
{/* <!-- mail section ends here --> */}
{/* <!-- Footer Section --> */}

</section>
<Footer/>
        </>
    )
}
export default Home;