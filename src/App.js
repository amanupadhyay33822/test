import Home from "./pages/Home-page/Home-page";
import Service from './pages/Service-page/Service';
import About from './pages/About-page/aboutPage';
import { Route , Routes } from "react-router-dom";
import '../src/app.css'
function App() {
  return (
    <div className="App">
      <Routes>
     <Route path="/" Component={Home}/> 
     <Route path="/services" Component={Service}/>  
     <Route path="/about" Component={About}/> 
      </Routes>

          
    </div>
  );
}

export default App;
