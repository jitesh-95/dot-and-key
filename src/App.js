import "./App.css";

import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import {AiFillGift} from "react-icons/ai";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
      <div className="rewardButton">
        <AiFillGift/>
        <p>Rewards</p>
      </div>
    </div>
  );
}
export default App;
