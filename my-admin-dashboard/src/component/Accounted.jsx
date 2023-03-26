import React from "react";
import AccountChart from "./AccountChart";
const Accounted=()=>{
    return(
        <>
        
        <div className="main">
        <h1 className="hide" >hiii</h1>
         <div className="container account mb-3 w-75 d-block m-auto mt-4">
           <div className="row">
             <div className="col">
              <h2>List of Accounts</h2>
               <p>Accounts</p>
                <select className="select">
                  <option>Select Account</option>
                  <option>Admin</option>
                  <option>Editor </option>
                  <option>Merchant </option>
                  <option>Customer </option>
                </select>
             </div>
           </div>
         </div>

         <div className="containeer">
           <div className="row">
             <div className="col">
              <AccountChart/>
             </div>
           </div>
         </div>
        </div>

        </>
    )
};
export default Accounted;