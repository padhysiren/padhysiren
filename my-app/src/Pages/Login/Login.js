import React from "react"
import "./Login.css"
import {Link,} from "react-router-dom"
import img1 from '../../assets/AMZN_BIG.jpg'


const Login = () => {
  return (
    <div className="login">
       <Link to ="/">
            <img 
            className="login_logo"
            src={img1} alt="" />
      </Link>  
           <div className="login_container">
            <h1>Sign In</h1>   
            <form>
              <h5>E-mail</h5>
              <input   type="email"/>
              <h5>Password</h5>
              <input   type="password" />
              <button  type="submit" className="login_signInButton">Sign In</button>
            </form>
            <p>
              By Singing-in you adree to Amazon's Condition of Use & Sale.Please see our PrivacyNotice,our Cookies 
              and our interest-Based Ads Notice
            </p>
            <button  className="login_registerButton">Create your Amazon Account</button>
           </div>
      
    </div>
  )
}

export default Login