import React, { useEffect, useState } from 'react';
import "./Signup.css";
import { useNavigate } from "react-router-dom";
var userData = JSON.parse(localStorage.getItem("userdedails"))||[]//change

const Signup = () => {
  const navigate = useNavigate()
  const [form, setform] = useState({});
  const onChange=(e)=>{
    //console.log(e.target.value)
    let { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });

  }
  useEffect(() => {
    //console.log(form);
  }, [form]);

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    console.log(form)
    userData.push(form) 
    localStorage.setItem("userdedails",JSON.stringify(userData ))

  }
  
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
      <form className='form' onSubmit={handleOnSubmit}>
        <label>FIRST NAME</label>
        <br/>
        <br/>
        <input className='input'  type="text" name="firstname"  onChange={onChange}/>
        <br/>
        <br/>
        <label>LAST NAME</label>
        <br/>
        <br/>
        <input className='input'  type="text" name="lastname"  onChange={onChange}/>
        <br/>
        <br/>
        <label>EMAIL</label>
        <br/>
        <br/>
        <input className='input' type="email" name="email"  onChange={onChange}/>
        <br/>
        <br/>
        <div className='la'>
        <label >PASSWORD </label>
    
        </div>
        <br/>
        
        <input className='input' type="password" name="password"  onChange={onChange}/>
        <button type="submit" className='createbtn' >create</button>
      </form>
    </div>
  )
}

export default Signup
