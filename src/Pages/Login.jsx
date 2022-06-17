import React, { useEffect, useState } from "react";
import "./Login.css";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
var userdetails = JSON.parse(localStorage.getItem("userdedails")) || [];
// console.log(userdetails)

const Login = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({});
  const onchange = (e) => {
    let { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };
  useEffect(() => {
    // console.log(form);
  }, [form]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    //console.log(form)
    if (
      form.email === userdetails.email &&
      form.password === userdetails.password
    ) {
      alert("login succes");
      navigate("Account");
      // window.location = 'Account.jsx';
    } else {
      alert("email and password wrong");
    }
  };

  return (
    <div className="loginmain">
      <h1>Login</h1>
      <br />
      <br />
      <br />
      <div className="facebook">
        {/* <div className='fa'></div> */}
        <div className="fa1">Facebook Login</div>
      </div>
      <br />
      <div className="google">
        {/* <h1>G</h1> */}
        <div className="fa1">Google Login</div>
      </div>
      <br />
      <form className="form" onSubmit={handleOnSubmit}>
        <label>EMAIL</label>
        <br />
        <br />
        <input
          className="input"
          type="email"
          name="email"
          onChange={onchange}
        />
        <br />
        <br />
        <div className="la">
          <label>PASSWORD </label>
          <label> Forgot?</label>
        </div>
        <br />

        <input
          className="input"
          type="password"
          name="password"
          onChange={onchange}
        />
        <button type="submit">sign in</button>
      </form>
      <p className="lisign">
        <Link to="/signup" style={{ color: " #50504b" }}>
          Don't have an account? Sign up here.
        </Link>
      </p>
    </div>
  );
};

export default Login;
