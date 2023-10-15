import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

import cover from "../../assets/Home-images/HOME PAGE COVER IMAGE.png";
import background from "../../assets/Home-images/Rectangle 632.png";

import "./Title.css"

function Title() {
  return (
    <>
      {/* <!-- first section --> */}
      <div className="First-section">
        {/* div for the right image and background  */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="right"
        >
          <img loader="lazy" className="am" src={cover} alt="ambulance" />
          <img loader="lazy" id="bg" src={background} alt="Background" />
        </motion.div>
        {/* div for left text and facts button  */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="left"
        >
          <a  id="ambuvians">
            AMBUvians
          </a>
          <a  id="slogan">
            India's First One-Stop Solution of all medical problems
          </a>
          <button id="facts">FACTS</button>
        </motion.div>
      </div>

      {/* <!-- first section ends here --> */}
    </>
  );
}

export default Title;
