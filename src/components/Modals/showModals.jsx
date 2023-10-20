import { useEffect } from "react";
import "./modal.css"
import { Link, useNavigate } from "react-router-dom";

const MyModal = ({closeModal}) => {
  const navigate = useNavigate();
    useEffect(()=>{
    document.body.style.overflowY="hidden";
    return ()=>{
        document.body.style.overflowY="scroll";
    }
    },[])
    return (
        <>
       <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h1 className="font-bold text-5xl  p-6 relative pt-10 ">
         Register At Ambuviansss
        </h1>
        
        <button className="modal-btn m-5 mx-auto mt-16" onClick={navigate("/register")}>Register</button>
       
      </div>
    </>);
  };
  export default MyModal;