import React, { useEffect, useState } from "react";
const Order=()=>{
    const [order,setOrder]=useState([]);
    useEffect(()=>{
        setOrder(JSON.parse(localStorage.getItem("dashboardPage"))["orders"])
      },[]);

      let orderarr=Object.keys(order).map(
        (key,index)=>order[key]
      )
    return(
        <>
        <div className="container">
        <div className="row">
        <div className="col">
        <table className="table table-hover table-striped shadow-lg text-center">
        <thead>
        <tr>
        <th>deliveryDate</th>
        <th>distance</th>
        <th>location</th>
        <th>operators</th>
        <th>orderNo</th>
        <th>startDate</th>
        <th>status</th>
        </tr>
        </thead>
          <tbody>
          {
            orderarr.map((key,index)=>{
                return(
                   <tr key={index}>
                      <td>{key.deliveryDate}</td>
                      <td>{key.distance}</td>
                      <td>{key.location}</td>
                      <td>{key.operators}</td>
                      <td>{key.orderNo}</td>
                      <td>{key.startDate}</td>
                      <td>{key.status}</td>
                   </tr>
                )
            })
          }
          </tbody>
        </table>
        </div>
        </div>
        </div>
        </>
    )
};
export default Order;