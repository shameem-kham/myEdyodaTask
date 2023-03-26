import { useEffect } from "react";
import React from "react";
import axios from "axios";
import Lines from "./ChartLine";
import Bars from "./ChartBar";
import Notifications from "./Notification";
import Order from "./Order";
import Pie from "./Pie";

function Dashboard() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json");
        localStorage.setItem("accountsPage", JSON.stringify(response.data.accountsPage));
        localStorage.setItem("dashboardPage", JSON.stringify(response.data.dasbhoardPage));
        localStorage.setItem("productsPage", JSON.stringify(response.data.productsPage));
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);


  return (
    <>
      <div className="main">
        <p className="dash-head">Welcome back,<span>Admin</span></p>

        <div className="container">
          <div className="row d-flex justify-content-center align-items-center p-4">
            <div className="col-5 start m-5 line" >
              <h3>Latest Hits</h3>
              <Lines />
            </div>
            <div className="col-5 start m-5 line">
              <h3>Performance</h3>
              <Bars />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center align-items-center p-4">
            <div className="col-5 start m-5 line">
              <h3>Latest Hits</h3>
              <Pie />
            </div>
            <div className="col-5 start m-5 line">
              <Notifications />
            </div>
          </div>
        </div>

        <div className="container line">
          <div className="row">
            <div className="col-12">
              <Order />
            </div>
          </div>
        </div>
      </div>

    </>
  )
};
export default Dashboard;
