import React from "react";
import { Link } from "react-router-dom";
function Navigated(props){
    return(
        <>
        <nav className={`navbar navbar-dark ${props.color} navbar-expand-sm p-3`}>
            <div className=" container ">
            <Link to={"/"} className="navbar-brand">{props.header}</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link ps-5 me-3" to={"/"}> Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ps-5 me-3">
                            <select className="nav-select">
                            <option>report</option>
                            <option>Daily report</option>
                            <option>Weekly report</option>
                            <option>Monthly report</option>
                            </select>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ps-5 me-3" to={"/contactproduct"}> Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ps-5 me-3" to={"/account"}>  Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ps-5 me-3" to={"/login"}>  Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
};
export default Navigated;