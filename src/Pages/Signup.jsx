import React from 'react';
import "./Signup.css";

const Signup = () => {
  return (
    <div className='signmain'>
      <h1>Create Account</h1>
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
        <label>FIRST NAME</label>
        <br/>
        <br/>
        <input className='input'/>
        <br/>
        <br/>
        <label>LAST NAME</label>
        <br/>
        <br/>
        <input className='input'/>
        <br/>
        <br/>
        <label>EMAIL</label>
        <br/>
        <br/>
        <input className='input'/>
        <br/>
        <br/>
        <div className='la'>
        <label >PASSWORD </label>
        {/* <label > Forgot?</label> */}
        </div>
        <br/>
        
        <input className='input'/>
        <button>create</button>
      </form>
    </div>
  )
}

export default Signup
