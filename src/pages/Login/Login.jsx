import React, { useState } from "react";
import "./Login.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ambu from "./Login_assets/AMBU_logo.png";
import img2 from "./Login_assets/img2.jpeg";
import search from "./Login_assets/search.png";
import fb from "./Login_assets/facebook.png";

export const Login = () => {
  const [user, setUser] = useState({
    Email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    const { Email, password } = user;
    if (!Email || !password) {
      toast.error("Please enter all required fields");
     return;
    } else {
      axios
        .post("http://localhost:5000/api/v1/login", user)
        .then((response) => {
          toast.success("login successful");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
  };

  return (
    <div className="conatiner">
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

      <div className="text space-x-6">
        <div className="text-1">
          Welcome to 
          <h2> AMBUvians</h2>
        </div>

        <div className="text-2 text-2xl font-bold top-37" >Let's hope you stay on top of your health</div>
      </div>

      <div className="content">
        <div className="img">
          <img src={img2}></img>
        </div>

        <div className="inputs">
          <div className="input-1">
            <div className="txt-1  font-bold ">
              <label htmlFor="" className=" font-extrabold  ">Email Address/Phone number</label> 
            </div>
            {/* <input type='email'></input> */}
            <input
              type="email"
              name="Email"
              value={user.Email}
              onChange={handleChange}
            
              placeholder="Enter your Email"
            ></input>
          </div>

          <div className="input-2">
            <div className="txt-2">
              <label htmlFor="">Password</label>
              </div>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={user.password}
              onChange={handleChange}
              ></input>
          </div>
        </div>
        <div className="check">
          <input type="checkbox" id="checkbox"></input>
          <label for="checkbox">Keep me logged in</label>
        </div>
        <div className="login mx-auto">
          <button type="submit" onClick={login}>
            
            Log In
          </button>
        </div>
        <div className="forget">
          <a href=" ">Forget password?</a>
        </div>
      </div>

      <div className="footer">
        <div className="or">--OR--</div>
        <div className="icons">
          <a href="">
            <img src={search} className="search" alt="" />
          </a>
          <a href="">
            <img src={fb} alt="" className="fb -mt-11 font-semibold " />
          </a>
        </div>

        <div className="acc">
          Don't have an account? 
          <a href="/register"> Sign Up here!</a>
        </div>
      </div>
    </div>
  );
};
