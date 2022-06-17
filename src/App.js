
import "./App.css";
import Footer from "./components/Footer";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import {
 
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return <div className="App">
    
    <Routes>
      {/* <Route path="" element={<Home/>}/> */}
      <Route path="/" element={<Login />}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="account" element={  <Account/>}/>
    </Routes>
    
  
    <Footer/>

    
  </div>;
}

export default App;
