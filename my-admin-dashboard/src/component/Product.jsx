import React from "react";
import ProductOne from "./ProductOne";
import ProductTwo from "./ProductTwo";

function Product(){
    return(
        <>
        <div className="main">
      <h1 className="hide">hiiiii</h1>
        
            <div className="product-page">
            <div className="left">
            <ProductOne/>
            </div>
            <div className="right">
            <ProductTwo/>
          </div>
            </div>
            </div>
          

          
           
        </>
    )
}
export default Product;