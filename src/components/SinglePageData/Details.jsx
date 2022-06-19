import React from 'react'
import  { useEffect,useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getSingleProduct } from "../redux/action";
import styles from "./singlePage.module.css";


const Details = () => {
  const [cart,setCart]=React.useState({});
  const {id}=useParams();
  const [product,setProduct]=useState({});

  useEffect(()=>{
    fetch(`http://localhost:8080/products/${id}`)
    .then((r)=>r.json())
    .then((d)=>setProduct(d));
  })

  const handleChange=(e)=>{
    console.log('hhh');
    fetch(`http://localhost:8080/cart`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify
      ({
        ...product,
      })
    })
  
  }
  return (
    <>
    <div className={styles.second}>
<h2>Made with LOve</h2>
<img  src={product.img3} alt='img'/>
<h2 className={styles.second}>Slather not Slurp</h2>
<img src={product.img4} alt="img" />

<div className={styles.secondA}>
  <h3>Who'll love it?</h3>
  <h1>+</h1>

</div>
<hr />
<div className={styles.secondA}>
  <h3>Who'll love it?</h3>
  <h1>+</h1>

</div>
<hr />
<div className={styles.secondA}>
  <h3>What's inside?</h3>
  <h1>+</h1>

</div>
<hr />
<div className={styles.secondA}>
  <h3>How it Feels?</h3>
  <h1>+</h1>

</div>
<hr />
<div className={styles.secondA}>
  <h3>Benefits  .......?</h3>
  <h1>+</h1>
</div>
<hr />
<h1 >Customer Reviews</h1>
   
<div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>

    <p>Based on 35 Reviews</p>
    <div className={styles.reviews2}>
    <button style={{width:"40%",justifyContent:"flex-end"}}>Ask me Question</button>
</div>

 <div>
     
 <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
  
 </div>
 <div>
     
 <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
 </div>
 <div>
     
 <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
 </div>
 <div>
     
 <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
 </div>
 <button>Highest Rating</button>
 </div>
 <hr />
    
      <div style={{display:'flex',}} className={styles.reviwes} >
        <div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <h2 style={{}}>06/08/2022</h2>
    </div>
    
      <div className={styles.reviews1}>
    
      <button style={{backgroundColor:"pink",border:"none"}}>Verified</button>
      <h4>Ayisha Shrin</h4>
    <h3>Skin Type:Dry</h3>
    <h3>Age:18-24</h3>
    <h3>Skin Concerns:Unevin Skintone</h3>
    <h3>:Dark Circle,COACOA RICH BODY BUTTER WITH 10%
      SHEA
    </h3>
    </div>
   
    
    </div>
    <hr />


    <div style={{display:'flex',}} className={styles.reviwes} >
        <div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <h2 style={{}}>06/08/2022</h2>
    </div>
    
      <div className={styles.reviews1}>
    
      <button style={{backgroundColor:"pink",border:"none"}}>Verified</button>
      <h4>Ayisha Shrin</h4>
    <h3>Skin Type:Dry</h3>
    <h3>Age:18-24</h3>
    <h3>Skin Concerns:Unevin Skintone</h3>
    <h3>:Dark Circle,COACOA RICH BODY BUTTER WITH 10%
      SHEA
    </h3>
    </div>
   
    
    </div>
    <hr />


    <div style={{display:'flex',}} className={styles.reviwes} >
        <div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <h2 style={{}}>06/08/2022</h2>
    </div>
    
      <div className={styles.reviews1}>
    
      <button style={{backgroundColor:"pink",border:"none"}}>Verified</button>
      <h4>Ayisha Shrin</h4>
    <h3>Skin Type:Dry</h3>
    <h3>Age:18-24</h3>
    <h3>Skin Concerns:Unevin Skintone</h3>
    <h3>:Dark Circle,COACOA RICH BODY BUTTER WITH 10%
      SHEA
    </h3>
    </div>
   
    
    </div>
    <hr />


    <div style={{display:'flex',}} className={styles.reviwes} >
        <div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <h2 style={{}}>06/08/2022</h2>
    </div>
    
      <div className={styles.reviews1}>
    
      <button style={{backgroundColor:"pink",border:"none"}}>Verified</button>
      <h4>Ayisha Shrin</h4>
    <h3>Skin Type:Dry</h3>
    <h3>Age:18-24</h3>
    <h3>Skin Concerns:Unevin Skintone</h3>
    <h3>:Dark Circle,COACOA RICH BODY BUTTER WITH 10%
      SHEA
    </h3>
    </div>
   
    
    </div>
    <hr />
<button style={{width:'50%',backgroundColor:"grey",height:"50px",marginLeft:'25%'}} onClick={handleChange}>ADD TO CART</button>
    
    </>
  )
}

export default Details
