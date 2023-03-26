import React, { useEffect, useState } from "react";
function ProductTwo(){
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
            <table className="table table-hover table-striped shadow-lg text-center">
            <thead>
            <tr>
            <th>Product Categories</th>
            
            </tr>
            </thead>
              <tbody>
              {
                productingPage.map((key,index)=>{
                    return(
                       <tr key={index}>
                          <td>{key.category}</td>
                       </tr>
                    )
                })
              }
              </tbody>
            </table>
            <button className="btn btn-warning btn-lg">ADD NEW CATEGORY</button>
            </div>
            </div>
            </div>
            </div>
        
        
        </>
    )
}
export default ProductTwo;