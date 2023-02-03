import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from "../../api/AuthRequest";
import { signUp } from "../../api/AuthRequest";

const Auth = () => {
  const dispatch = useDispatch();
  const loading=useSelector((state)=>state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(true);
console.log("Loading")
  const [data, setData] = useState({ firstname: "", lastname: "", password: "", username: "", confirmpass: "" });
  const [checkPass, setCheckPass] = useState(true);

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass ? dispatch(signUp(data)) : setCheckPass(false)
    }
    else{
      dispatch(logIn(data))
    }

  }
  const resetForm = () => {
    setCheckPass(true);
    setData({
      firstname: "", lastname: "", password: "", username: "", confirmpass: ""
    })
  }

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Social Pedia</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>


      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
          {isSignUp &&
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handelChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handelChange}
                value={data.lastname}
              />
            </div>
          }


          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              onChange={handelChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handelChange}
              value={data.password}
            />
            {isSignUp &&
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handelChange}
                value={data.confirmpass}
              />
            }

          </div>
          <span style={{ display: checkPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>
            * Confirm Password is not Same
          </span>

          <div>
            <span style={{ fontSize: '12px', cursor: 'pointer' }} onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>{isSignUp ? "Already have an account. Login!" : "Don't have an account? Sign Up"}</span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>{loading ?"Loading...." : isSignUp ? "Signup" : "Log In"}</button>
        </form>
      </div>


    </div>
  );
};



export default Auth;