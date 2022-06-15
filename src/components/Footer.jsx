import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footermain">
      <div>
        <h2 className="footerh">GET TO KNOW US</h2>
        <p className="footerp">ABOUT US</p>
        <p className="footerp">CONTACT US</p>

        <p className="footerp">EARTHCARE</p>
        <p className="footerp">AFFILIATE PROGRAM</p>
        <p className="footerp">TERMS & CONDITION</p>
        <p className="footerp">REFUND & CANCELLATION</p>
        <p className="footerp">PRIVACY POLICY</p>
        <p className="footerp">ORDER & SHIPPING</p>
        <p className="footerp">PAYMENT TERMS</p>
        <p className="footerp">TERMS OF SERVICE</p>
        <p className="footerp">REFUND POLICY</p>
      </div>
      <div>
        <h2 className="footerh">ALSO AVAILABLE ON</h2>
        <p>
          <a
            className="footerp"
            href="https://www.nykaa.com/brands/dot-key/c/7675?root=search,brand_menu,brand_list,Dot%20&%20Key&sourcepage=home&rtqu=Dot%20%26%20Key"
          >
            NYKAA
          </a>
        </p>
        <p>
          <a
            className="footerp"
            href="https://www.amazon.in/stores/node/19401367031?_encoding=UTF8&field-lbr_brands_browse-bin=Dot%20%26%20Key&ref_=bl_dp_s_web_19401367031"
          >
            AMAZON
          </a>
        </p>
        <p>
          <a
            className="footerp"
            href="https://www.flipkart.com/search?q=dot%20and%20key&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
          >
            FLIPKART
          </a>
        </p>
        <p>
          <a
            className="footerp"
            href="https://www.myntra.com/dot-and-key?src=bc"
          >
            MYNTRA
          </a>
        </p>
      </div>
      {/* third */}
      <div>
        <h2 className="footerh">STAY UPDATED</h2>
        <div>
          <input className="FOOTERIN" placeholder="example@example.com" />
          <button className="footerbtn">SUBMIT</button>
        </div>
        <div className="socialmedia">
          <h2 className="footersocial">FOLLOW US</h2>
          <a className="icon" href="https://business.facebook.com/dotandkey">
            <FaFacebookF size="30px" />
          </a>
          
          <a className="icon" href="https://www.instagram.com/dotandkey.skincare/">
            <BsInstagram size="30px" />
          </a>
          
          <a className="icon" href="https://www.youtube.com/channel/UCD7U0EUBYg9YlL-zVZjkjfA">
            <IoLogoYoutube size="30px" />
          </a>
        </div>
        <p className="footerp">© 2022 Dot & Key</p>
      </div>
    </div>
  );
};

export default Footer;
