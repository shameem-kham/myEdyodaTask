import React from "react";
const Footpart=(props)=>{
    return(
        <>
        <footer className={`${props.color} foot  p-4`}>
           <div className="row">
               <div className="col">
                <p>{props.footing}</p>
               </div>
           </div>
        </footer>
        </>
    )
};
export default Footpart;