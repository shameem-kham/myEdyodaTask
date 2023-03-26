
import React, { useEffect, useState } from "react";
function ProductOne(){
    const [product,SetProduct]=useState([]);
    useEffect(()=>{
        SetProduct(JSON.parse(localStorage.getItem("productsPage"))["products"])
    },[]);
    let productingPage=Object.keys(product).map((key,index)=>product[key]);
    return(
        <>
        <div className="card shadow-lg">
            <div className="card-body line">
            <div className="row align-items-center ">
            <div className="col">
            <table className="table table-hover table-striped shadow-lg text-center ">
            <thead>
            <tr>
            <th>PRODUCT NAME</th>
            <th>UNIT SOLD</th>
            <th>IN STOCK</th>
            <th>EXPIRE DATE</th>
            </tr>
            </thead>
              <tbody>
              {
                productingPage.map((key,index)=>{
                    return(
                       <tr key={index}>
                          <td>{key.name}</td>
                          <td>{key.unitSold}</td>
                          <td>{key.stock}</td>
                          <td>{key.expireDate}</td>
                       </tr>
                    )
                })
              }
              </tbody>
              </table>
              <button className="btn btn-warning btn-lg m-2">ADD NEW PRODUCT</button><br/>
              <button className="btn btn-warning btn-lg m-2">DELETE SELECTED PRODUCT</button>
            </div>
            </div>
            </div>
            </div>
      
       
        </>
    )
}
export default ProductOne;