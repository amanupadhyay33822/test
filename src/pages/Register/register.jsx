import React, { useState } from 'react';
import './register.css';
import   ambu  from './Register_assets/AMBU_logo.png';
import img1 from './Register_assets/img1.jpeg';
import search from './Register_assets/search.png';
import fb from './Register_assets/facebook.png';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Link } from 'react-router-dom';

export const Register = () => {
  const [user,setUser]= useState({
    name:"",
    Email:"",
    password:"",
    reEnterPassword:"",
  })

  const handleChange = (e) => {
    const {name,value}= e.target
   setUser({
    ...user,
    [name]: value
   })

  }
  const register = () => {
    const {name,Email,password,reEnterPassword} = user
    
    if(!name || !Email || !password  ){
      // alert("Please enter")
   toast.warn("Please enter all details")
   return;
    }
    if(password !== reEnterPassword) {
      toast.warn("password not match")
      // alert("password not match")
    }
    else{
      axios.post("http://localhost:5000/api/v1/register",user)
      .then((response) => {toast.success("Register Sucessfully")})
      .catch(error => {toast.error(error.response.data.message)})
     

    }
    
  }


  return (
    
    <div className='conatiner'>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        <div className="header">
            <img src={ambu}></img>
        </div>

        <div className="text">
            <div className='text-1'>Welcome to
            <h2> AMBUvians</h2>
            </div>

            <div className="text-2 text-2xl font-bold top-40"> Let's hope you stay on top of your health</div>

        </div>

        <div className="content">

        <div className="img">
            <img src={img1}></img> 
        </div>

        <div className="inputs">

        <div className='input-1'>
          <div className="txt-1 flex items-start text-3xl ">Name</div>
          {/* <input type='text'></input> */}
          <input type="text" name="name" value={user.name}  onChange={handleChange} placeholder="Your Name" ></input>
         </div>

         <div className='input-2'>
          <div className="txt-2 flex items-start text-3xl ">Email Adress/Phone number</div>
          <input type="email"  name="Email" value={user.Email} onChange={handleChange} placeholder="Your Email" ></input>
         </div>

         <div className="input-3">
         <div className="txt-3 text-3xl ">Password</div>
         <input type="password" name="password" value={user.password}  onChange={handleChange} placeholder="Your Password"></input>
         </div>
         <div className="input-4">
         <div className="txt-4 text-3xl ">Confirm Password</div>
         <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder="Re-enter Password" ></input>
         </div>

        </div>
        <div className="check -mt-5">
          <input type='checkbox' id='checkbox'></input>
          <label for="checkbox">I accept the <a className=' text-blue-500' href="http://"> terms</a> and <a className='text-blue-500' href="http://">privacy policy</a></label>
        </div>
        <div className="register top-110">
          <button type='submit' onClick={(e)=>{
              e.preventDefault();
              register();
          }}> Register</button>
         </div>
        <div className="Have flex items-start ">
        Have an Account?  
        
        <a href="/login">Log in</a>
        </div>
        </div> 

     <div className="footer ">
      <div className="register-with">--Register With--</div>
      <div className="icons ">
       <a href=""><img src={search}  className="search mt-5"alt="" /></a>
       <a href=""><img src= {fb}alt=""  className='fb'/></a>
      </div>

    </div> 
  
    </div>
  )
}
