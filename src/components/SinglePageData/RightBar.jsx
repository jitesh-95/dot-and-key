import React, { useState,Component } from 'react'
import  { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import styles from "./singlePage.module.css"

const RightBar = () => {
  // state={
  //   productData:[],
  // }

  
  const {id}=useParams();
  const [product,setProduct]=useState({});

  useEffect(()=>{
    if(id){
      fetch('https://netmedsbackend.herokuapp.com/data/1')
      .then((r)=>r.json)
    
      .then((d)=>setProduct(d));
    }

  
  })
  return (
<>
 <div >



<img  className={styles.right}src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_720x.jpg?v=1644862704" alt='img'/>
<div >
    <img  className={styles.one}src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_720x.jpg?v=1644862704' alt="img"/>
    <img  className={styles.one}src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_720x.jpg?v=1644862704' alt="img"/>
    <img  className={styles.one}src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_720x.jpg?v=1644862704' alt="img"/>
    <img  className={styles.one}src='https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_720x.jpg?v=1644862704' alt="img"/>
</div>
<div className={styles.pink}>
    <h3>Perks To Love</h3>
<h3 style={{color:"white"}}>BIRTHDAY SALE LIVE NOW:UPTO 50% OFF SITEWIDE+ FREE GIFTS</h3>
<h3>NEW LAUNCH SUNCREEN SPF50</h3>
<h4>Get 1 D&K FULL SIZE FREEVBIE ON ORDERS 999+</h4>
<h4>Get 2 D&K FULL SIZE FREEBIE on orders 1299+</h4>
<h4>Get 3 D&K FULL SIZE FREEBIE on orders 1799+</h4>
<h4 style={{color:"white"}}>Additional 3% Off on Prepaid Orders</h4>
<h4 style={{color:"white"}}>Earn 20% Cashback on all orders.</h4>
<h4 style={{color:"white"}}>FREE APPLICATOR will be shipped with all Masks & Lip care products</h4>
</div>
<p>*offer valid till Stock Lasts </p>
<p>*offer not applicable on Gifting COmbos,iwikwi &Merch</p>
</div>





</>

  )
}

export default RightBar