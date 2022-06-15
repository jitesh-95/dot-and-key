import React from 'react'
import "./Login.css";
import {FaFacebookSquare } from "react-icons/fa";

const Login = () => {
  return (
    <div className='loginmain'>
      <h1>Login</h1>
      <br/>
      <br/>
      <br/>
      <div className='facebook'>
        {/* <div className='fa'></div> */}
        <div className='fa1'>Facebook Login</div>
      </div>
      <br/>
      <div className='google'>
      {/* <h1>G</h1> */}
        <div className='fa1'>Google Login</div>
      </div>
      <br/>
      <form className='form'>
        <label>EMAIL</label>
        <br/>
        <br/>
        <input className='input'/>
        <br/>
        <br/>
        <div className='la'>
        <label >PASSWORD </label>
        <label > Forgot?</label>
        </div>
        <br/>
        
        <input className='input'/>
        <button>sign in</button>
      </form>
      <p><a href="Signup.jsx">Don't have an account? Sign up here.</a></p>


    </div>
  )
}

export default Login
