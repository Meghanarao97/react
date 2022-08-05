import React, { Fragment, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import "./Login.css";
import Dashboard from "./Containers/Dashboard";
import Signupcomponent from "./Signupcomponent";

function Logincomponent() {
  const [signUp, setsignUp] = useState(false);
  const [dashBoard, setdashBoard] = useState(false);

  const signupFun = () => setsignUp(true);
  const dashFun = () => setdashBoard(true);

  //   function signupFun() {
  //     setsignUp(true);
  //   }
  return (
    <>
      {!dashBoard && !signUp && (
        <div className="loginPage loginIcon">
          <div className="loginContainer">
            <h2 className="loginId">Login</h2>

            <p>Please enter your login and your password</p>

            <div>
              <span className="userIcons">
                <FaUserAlt />
              </span>
              <input
                className="inputControl"
                type="text"
                placeholder="Username or Email"
                name="uname"
                required
              ></input>
            </div>
            <div>
              <input
                className="inputControl"
                type="text"
                placeholder="Password"
                name="pswrd"
                required
              ></input>
            </div>
            <div>
              <i>Forgot Password?</i>
            </div>
            <button className="button1" onClick={dashFun}>
              Login
            </button>

            <button className="button2" onClick={signupFun}>
              Signin Or Signin with your Google
            </button>

            <div>
              <br />
              <i>Not a member yet?Register!</i>
            </div>
          </div>
        </div>
      )}
      {signUp && <Signupcomponent />}
      {dashBoard ? <Dashboard /> : null}
    </>
  );
}
export default Logincomponent;
