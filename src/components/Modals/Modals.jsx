import React, { useState } from "react";
import MyModal from "./showModals";
import './modal.css';
const Modals = () => {
  const [showModal, setshowModal] = useState(true);
  const closeModal = () => setshowModal(false);
  
  return (<>
    
     {showModal && <MyModal closeModal={closeModal}/>}
     </>
  );
};

export default Modals;
