import React from "react";

import "./WhyWeCare.css"

import why_we_come_upper_left from "../../assets/Home-images/1.jpeg";
import why_we_come_upper_mid from "../../assets/Home-images/2.jpeg";
import why_we_come_upper_right from "../../assets/Home-images/3.png";
import why_we_come_lower from "../../assets/Home-images/4.jpeg";

function WhyWeCare() {
  return (
    <>
      {/* <!-- Why we come section --> */}

      {/* <motion.div variants={fadeIn('left',0.3)} 
          initial="hidden"
          whileInView={'show'} className="come">
          </motion.div> */}
      <div className="come" style={{ opacity: "1", transform: "none" }}>
        <a href="/inactive url">Why We Come</a>
      </div>

      {/* <motion.div variants={fadeIn('left',0.3)} 
          initial="hidden"
          whileInView={'show'} className="whywecome"> */}
      <div className="news1">
        <img src={why_we_come_upper_left} alt="" />
        <img src={why_we_come_upper_mid} alt="" />
        <img src={why_we_come_upper_right} alt="" />
      </div>
      <div className="news2">
        <img src={why_we_come_lower} alt="" />
      </div>
      {/* </motion.div> */}
      {/* <!-- why we come section ends here --> */}
    </>
  );
}

export default WhyWeCare;
