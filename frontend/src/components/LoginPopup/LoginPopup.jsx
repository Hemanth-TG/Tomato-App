import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useEffect } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'

const LoginPopup = ({setShowLogin}) => {
    const {url,setToken}=useContext(StoreContext);
    const [data,setData]=useState({
      name: "",
      email: "",
      password: ""
    })

    const onChangeHandler = (event) => {
      const name=event.target.name;
      const value=event.target.value;

      setData((prev)=>({...prev,[name]:value}));
    }

    const onLogin = async (event) => {
      event.preventDefault();
      try {
            let newUrl=url;
            if(currState==="Login") {
              newUrl+="/api/user/login";
            }
            else {
              newUrl+="/api/user/register";
            }

            const response=await axios.post(newUrl,data);
            if(response.data.success) {
              setToken(response.data.token);
              localStorage.setItem("token",response.data.token);
              setShowLogin(false);
            }
            else {
              toast.error(response.data.message);
            }
      }
      catch(error) {
        console.log(error);
        toast.error("Server is not up, sorry!")
      }
      
    }
    useEffect(()=>{
      console.log(data);
    },[data])
    const[currState,setCurrState]=useState("Sign Up")
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-form'>
        <div className="login-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="form-inputs">
            {currState==="Sign Up"?<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter your name' />:null}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter your email' />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter your password' />
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="terms-and-conditions">
                <input type="checkbox" required />
                <p>I agree to the terms & conditions by continuing to fill this form</p>
            </div>
            <div className='login-or-signup'>{currState==="Sign Up"?<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Click here</span></p>:<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>}</div>
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
