import React from 'react'
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { IconName } from "react-icons/fa";
import styles from "./singlePage.module.css"


const LeftBar = () => {
  return (
    < >
    <div>
    <h3>COCOA RICH BODY BUTTER WITH 10% SHEA</h3>
    
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>
    <div className={styles.clip}></div>

    <h2 style={{
        textDecorationLine: 'line-through'
    }}>Rs:595.00</h2>
    <h2 style={{color:'pink'}}>Rs:387.00</h2>
<p>Inclusive of all Taxes</p>
<select style={{width:'300px',height:'40px',marginBottom:'10px'}}>
        <option>100Ml</option>
        <option>200Ml</option>
    </select>
<div>
    <button style={{backgroundColor:"#420",width:'300px',height:'40px', color:"white"}}>ADD TO CART</button>

    </div>
    <h4>A warm, melt-in-your-skin body butter with the goodness of 10% shea & cocoa butter for intense<br/> hydration leaving skin ultra-soft, smooth & glowing with the lingering<br/> essence of vanilla.</h4>

    <h1 >Feel The <i>Love </i></h1>
    <div style={{display:"flex", height:'80px',gap:'50px'}}>
    <img src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493' alt='img'/>
    <img src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Skin_Damage.png?v=1636455537' alt='img'/>
    <img src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Strech_Marks.png?v=1636455741' alt='img'/>
    </div>
    </div>
    
   
    
    
    </>
  )
}

export default LeftBar