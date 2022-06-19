import React, { useEffect, useState } from 'react'
import "./Login.css";
import {FaFacebookSquare } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
var  userdetails=JSON.parse(localStorage.getItem("userdedails"))||[];
console.log("userdetails",userdetails)

const Login = () => {
  const navigate = useNavigate()
  const [form,setform]=useState({});
  const onchange=(e)=>{
    let {name,value}=e.target;
    
    setform({
      ...form,
      [name]: value,
    });
   
  }
  useEffect(() => {
   // console.log(form);
  }, [form]);
  var c=0;
  const handleOnSubmit=(e)=>{
    e.preventDefault();
   // console.log("form", form)
   userdetails.map((e)=>{
    if(e.email===form.email && e.password===form.password){
      //console.log(e.email,e.password)
     
      // navigate("Account");
      c++;
    
      localStorage.setItem("aftercheckingdedails",JSON.stringify(e))
      // return  alert ("login sucess");
     
    }
   })
   if(c>=1){
    alert ("login sucess");
    navigate("Account");

   }else{
    alert ("login failed");
   }
    
    // for(var i=0;i<userdetails.length;i++){
    //  // console.log("before checking",userdetails[i])
    //   if(form.email==userdetails[i].email && form.password==userdetails[i].password){
    //     //console.log("after checking",userdetails[i])
    //     localStorage.setItem("aftercheckingdedails",JSON.stringify(userdetails[i]))
    //       alert("login succes");
    //        navigate("Account")
    //        break;
    //       // window.location = 'Account.jsx';
    
    //     }else{
    //       alert("email and password wrong");
          
         
    //     }
    // }



    // if(form.email==userdetails.email && form.password==userdetails.password){
    //   alert("login succes");
    //    navigate("Account")
    //   // window.location = 'Account.jsx';

    // }else{
    //   alert("email and password wrong")
    // }

  }


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
      <form className='form' onSubmit={handleOnSubmit}>
        <label>EMAIL</label>
        <br/>
        <br/>
        <input className='input' type="email" name="email" onChange={onchange}/>
        <br/>
        <br/>
        <div className='la'>
        <label >PASSWORD </label>
        <label > Forgot?</label>
        </div>
        <br/>
        
        <input className='input' type="password" name="password" onChange={onchange}/>
          <button type='submit' className='SIGNBTN'>sign in</button>
      </form>
     <p className='lisign'><Link  to="signup" style={{ color:" #50504b"}}>Don't have an account? Sign up here.</Link></p>


    </div>
  )
}

export default Login
