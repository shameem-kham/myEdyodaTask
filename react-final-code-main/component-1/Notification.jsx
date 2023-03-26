import React, { useEffect, useState } from "react";

const Notifications = () => {
  let [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(
      JSON.parse(localStorage.getItem("dashboardPage"))["notifications"]
    );
  }, []);

  let notificationsarr = Object.keys(notifications).map(
    (key, index) => notifications[key]
  );

  return (
    <>
      <h2>NotificationList</h2>
      {notificationsarr.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="card shadow-lg">
            <div className="card-body line">
            <div className="row align-items-center ">
            <div className="col-sm-3">
            <img src={item.pic} alt={index}  width={100} height={100} className="rounded-circle"/>
            </div>
            <div className="col-sm-9 ">
            <li className="list-group-item ">
            <p>
              {item.message}
              <br />
              <span> {item.time}</span>
            </p>
            </li>
            </div>
            </div>
            </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Notifications;