import React from "react";

// import "./Home.css"


import Navbar from "../../components/Navbar";

import ReachOut from "./ReachOut";

import Title from "../Home-page/Title";
import OurVision from "./OurVision";
import KnowUs from "./KnowUs";
import ComingSoon from "./ComingSoon";
import WhyWeCare from "./WhyWeCare";
import Note from "./Note";
import Partners from "./Partners";

import Footer from "../../components/Footer";
import WhyChooseUs from "./WhyChooseUs";

 




const Home = () =>{
    return(
      <>
        <Navbar/>

          <section style={{marginTop:'7.5vh'}}>
    
          <ReachOut/>

          <Title/>
          <OurVision/>
          <KnowUs/>
          <WhyChooseUs/>
          <ComingSoon/>
          <WhyWeCare/>  
          <Note/>
          <Partners/> 

        </section>

      <Footer/>
    </>
  )
}

export default Home;