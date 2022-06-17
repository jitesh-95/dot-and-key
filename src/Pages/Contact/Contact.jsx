import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react';
import styles from "./contact.module.css";
import { Link } from '@chakra-ui/react';
// import { ExternalLinkIcon } from '@chakra-ui/icons';

const Contact = () => {
  const [form, setForm] = useState({});
  const ref = useRef();
  const passRef = useRef();

  const handleOnChange = (e) => {
    let { type, name, value, checked, files } = e.target;
    // console.log(type, name, value, checked);
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (!form.username) {
      ref.current.focus();
      console.log(ref.current);
      // ref.current.className += styles.redBorder;
    } else if (!form.password) passRef.current.focus();
  };

  return (
    
    <div>
         <form onSubmit={handleOnsubmit}>
      <div>
        <Image
          boxSize="200px"
          width="240px"
          height="60px"
          marginLeft="20%"
          marginTop="5%"
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Dot_Key_Logo.png?138265"
          alt="logo"
        />
      </div>
      <div className={styles.page}>
      <div className={styles.info}>
        <h4 className={styles.shipping}>Contact information</h4>
        <p className={styles.p}>Already have an account? Log In to redeem Skindulgence Points.
        <Link color ="#ff6781">Log in</Link>
        </p>
        <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
          />
          <br/>
          <h4 className={styles.shipping}>Shipping address</h4>
           <div>
             <input 
             type="checkbox" 
             name="Keep me up to date on news and exclusive offers"
             onChange={handleOnChange} />
             <label>Keep me up to date on news and exclusive offers</label>
           </div>
           <div>
          <select
            className ={styles.country}
            name="country"
            defaultValue={form.country}
            onChange={handleOnChange}
          >
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="United States">United States</option>
            <option value="Russia">Russia</option>
          </select>
        </div>
        <div className={styles.name}>
        <div>
          <input
            className={styles.firstname}
            ref={ref}
            type="text"
            name="username"
            placeholder="First Name"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input
          className={styles.lastname}
            ref={ref}
            type="text"
            name="username"
            placeholder="Last Name"
            onChange={handleOnChange}
          />
        </div>
        </div>
        <input
            className={styles.address}
            name="address"
            placeholder="Address"
            onChange={handleOnChange}
          />
           <input
            className={styles.apartment}
            name="apartment"
            placeholder="Apartment, suite,etc.(optional)"
            onChange={handleOnChange}
          />
           <div className={styles.name}>
        <div>
          <input
            className={styles.city}
            ref={ref}
            type="text"
            name="city"
            placeholder="City"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <select
            className ={styles.state}
            name="state"
            defaultValue={form.state}
            onChange={handleOnChange}
          >
            <option value="TamilNadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
            <option value="AndhraPradhesh">Andhra Pradhesh</option>
          </select>
        </div>
        <div>
          <input
          className={styles.pincode}
            ref={ref}
            type="text"
            name="pincode"
            placeholder="PIN Code"
            onChange={handleOnChange}
          />
        </div>
        </div>
        <div>
        <input
            className={styles.phone}
            type="number"
            name="Phone"
            placeholder="Phone"
            onChange={handleOnChange}
          />
        </div>
        <div>
             <input type="checkbox" 
             name="Save this information for next time" 
             onChange={handleOnChange} />
             <label>Save this information for next time</label>
        </div>
        <div>
             <input type="checkbox" 
             name="Get Order Updates On WhatsApp" 
             onChange={handleOnChange} />
             <label>Get Order Updates On WhatsApp</label>
        </div>
        <div className={styles.return}>
          <Link> Return to cart</Link>
          <Button 
          marginTop="10px" 
          marginBottom="10px" 
          marginLeft="40%"
          colorScheme='#616160;' 
          type="submit">Continue to Shipping</Button>
        </div>
       
      </div>
            <div className={styles.result}>
                    <h4>Pay now and get <Link color="#ff6781">3% instant discount</Link></h4>
                    <div className={styles.coupon}>
                          <input
                          className={styles.code}
                          ref={ref}
                          type="text"
                          name="code"
                          placeholder="Gift card or discount code"
                          onChange={handleOnChange}
                        />
                        <Button color="grey">Apply</Button>
                      </div>
                      <div className={styles.price}>
                        <h4>Total</h4>
                        <h4>INR</h4>
                      </div>
            </div>
      </div>
      </form>
     
      Form
      {/* <form onSubmit={handleOnsubmit}>
        <div>
          <label>Name:</label>
          <input
            ref={ref}
            type="text"
            name="username"
            placeholder="Enter Name..."
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            placeholder="Enter Age..."
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email..."
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            ref={passRef}
            name="password"
            placeholder="Enter Password..."
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label>City:</label>
          <select
            name="city"
            defaultValue={form.city}
            onChange={handleOnChange}
          >
            <option value="Salem">Salem</option>
            <option value="Madurai">Madurai</option>
            <option value="Trichy">Trichy</option>
            <option value="Trinelveli">Trinelveli</option>
          </select>
        </div>

        <div>
          <input type="checkbox" name="IsIndian" onChange={handleOnChange} />
          <label>:Is Indian </label>
        </div>

        <div>
          <div>
            <input
              type="radio"
              name="gender"
              value={"Male"}
              onChange={handleOnChange}
            />
            <label>Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value={"Female"}
              onChange={handleOnChange}
            />
            <label>Female</label>
          </div>
        </div>

        <div>
          <label>User Resume : </label>
          <input
            type="file"
            accept="image/png, image/jpeg, application/pdf"
            name="resume"
            files={form.resume}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default Contact;
