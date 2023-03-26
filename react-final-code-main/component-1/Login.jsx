import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const Navigate=useNavigate();
    const [userName,setUserName]=useState("");
    const [userPass,setUserPass]=useState("");
    const [errmsg, setErrMsg] = useState('')
    const validate=()=>{
        setErrMsg('');
           if(userName==="admin" && userPass==="pass@123"){
              Navigate("/")
           }
           else{
            setErrMsg('Invalid User');
           }
    };
    const getName=(e)=>{
        setUserName(e.target.value)
    }
    const getPass=(e)=>{
        setUserPass(e.target.value)
    }
    return(
        <>
       <div className="login-page h-100">
       <input type="text" id="userName" placeholder="enter your name = admin" className="form-control p-3 bg-secondry" onChange={getName}/>
       <input type="password" id="userPass" placeholder="enter your password = pass@123"  className="form-control mt-5 p-3 bg-secondry" onChange={getPass}/>
       <button onClick={validate}  className="form-control btn btn-warning m-5 p-3 ">submit</button>
       <p>{errmsg}</p>
       </div>
        </>
    )
}
export default Login;