import "./App.css";

import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import {AiFillGift} from "react-icons/ai";
import ProductListing from "./components/ProductListing";
import SinglePage from "./components/SinglePageData/SinglePage";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product" element={<ProductListing />} />
        <Route path="/product/:id" element={<SinglePage/>} />
        <Route>404 Not Found!</Route>
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
