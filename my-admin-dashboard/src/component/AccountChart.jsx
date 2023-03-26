import React from "react";
function AccountChart(){
    return(
        <>
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center">
             <div className="col account acc-left w-50">
               <h3 className="m-4">Change Avatar</h3>
                 <img src="https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb" alt="img" width={400} height={300} className="d-block m-auto"/>
                 <button className="btn btn-warning btn-lg mt-4">UPLOAD NEW PHOTO</button>
             </div>
             <div className="col-sm-6 account acc-right ">
            
                <div className="inp">
                <h4>Account Settings</h4>
                <input type="text" placeholder="Account Name" className="m-3"/>
                <input type="email" placeholder="Account Email" className=""/><br/>
                <input type="password" placeholder="Password" className="m-3"/>
                <input type="password" placeholder="Re-Password" /><br/>
                <input type="tel" placeholder="Number" className="m-3"/>
                <input type="button" value="UPDATE YOUR PROFILE" className="btn btn-warning p-4"/>
                <button className="btn btn-warning btn-lg m-2">DELETE YOUR ACCOUNT</button>
                </div>
             </div>
          </div>
        </div>
        </>
    )
};
export default AccountChart;