import React from "react";

import whatsapp from "../../assets/Home-images/whatsapp.jpg";
import call from "../../assets/Home-images/call.png";

import "./ReachOut.css"

function ReachOut() {
  return (
    <>
      {/* <!-- reach-out section fixed in the bottom left corner --> */}
      <div className="whatsapp">
        <img src={whatsapp} alt="whatsapp" />
        <img src={call} alt="call" id="call" />
      </div>
      {/* <!-- reach-out section ends here --> */}
    </>
  );
}

export default ReachOut;
