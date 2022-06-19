import React from "react";
import "./Account.css";
import { useNavigate } from "react-router-dom"
const Account = () => {
  const navigate = useNavigate()
  var  userdata=JSON.parse(localStorage.getItem("aftercheckingdedails"));
  console.log(userdata)
  return (
    <div className="accountmain">
      <h1 className="acch1">My account</h1>
      <button className="loutbtn" onClick={()=>{
        navigate(`/`)

      }}>Log out</button>
      <div className="accountmain1">
        <div className="ac1">
            <h2>Order History</h2>
            <p>You haven't placed any orders yet.</p>
        </div>
        <div className="ac1">
            <h2>Account details</h2>
            <p></p>
            {/* {userdata.map((el)=>{
              <>
               <h4>{`${el.firstname} ${el.lastname}`}</h4>
               <h2>{`${el.firstname} ${el.lastname}`}</h2>
               </>

            })} */}
            
            <h4>{`${userdata.firstname} ${userdata.lastname}`}</h4>
            <h2>{`${userdata.firstname} ${userdata.lastname}`}</h2>

            <p>India</p>
            <p>View addresses (1)</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
