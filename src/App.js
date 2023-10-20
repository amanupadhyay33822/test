import Home from "./pages/Home-page/Home-page";
import Service from './pages/Service-page/Service';
import About from './pages/About-page/aboutPage';
import {Login } from "../src/pages/Login/Login"
import { Route , Routes } from "react-router-dom";
import '../src/app.css'
import { Register } from "../src/pages/Register/register";
import Modals from "./components/Modals/Modals";
function App() {
  return (
    <div className="App">
      <Routes>
     <Route path="/" Component={Home}/> 
     <Route path="/services" Component={Service}/>  
     <Route path="/about" Component={About}/> 
     <Route path="/login" Component={Login}/> 
     <Route path="/register" Component={Register}/> 
     <Route path="/modal" index Component={Modals}/> 
      </Routes>

          
    </div>
  );
}

export default App;
