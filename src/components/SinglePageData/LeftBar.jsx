import React, { useState } from 'react'
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { IconName } from "react-icons/fa";
import styles from "../SinglePageData/singlePage.module.css"


const LeftBar = () => {
  const [cart,setCart]=React.useState({});
  const {id}=useParams();
  const [product,setProduct]=useState({});

  useEffect(()=>{
    fetch(`http://localhost:8080/products/${id}`)
    .then((r)=>r.json())
    .then((d)=>setProduct(d))
  },[])


  const handleChange=(e)=>{
    
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
    < >
    <div>
    <h3 className={styles.font}>{product.name}</h3>
    <h3>{product.rating}<h3 style={{color:"blue"}}>26 reviews</h3></h3>
    
   

    <h2 style={{
        textDecorationLine: 'line-through'
    }}>Rs:595.00</h2>
    <h2 style={{color:'pink'}}>Rs:{product.price}.00</h2>
<p>Inclusive of all Taxes</p>
<select style={{width:'300px',height:'40px',marginBottom:'10px'}}>
        <option>100Ml</option>
        <option>200Ml</option>
    </select>
<div>
    <button style={{backgroundColor:"#420",width:'300px',height:'40px', color:"white"}} onClick={handleChange}>ADD TO CART</button>

    </div>
    <h4 className={styles.font}>{product.description}</h4>

    <h1 >Feel The <i>Love </i></h1>
    <div style={{display:"flex", height:'80px',gap:'60px'}}>
    <img src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493' alt='img'/>
    <img src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Skin_Damage.png?v=1636455537' alt='img'/>
    <img src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Strech_Marks.png?v=1636455741' alt='img'/>
    </div>
    </div>
    
   
    
    
    </>
  )
}

export default LeftBar