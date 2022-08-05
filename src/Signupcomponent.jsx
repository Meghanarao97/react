import React, { useState } from "react";
import Logincomponent from "./Logincomponent";
import "./Signup.css";

function Signupcomponent() {
  const [logIn, setlogIn] = useState(false);
  const [fbPage, setfbPage] = useState(false);
  const loginFun = () => setlogIn(true);
  const facebookPage = () =>
    setfbPage(window.open("http://facebook.com/", "_self"));

  // function loginFun() {
  //   setlogIn(true);
  // }
  return (
    <>
      {!logIn && (
        <div className="signupPage">
          <div className="signupContainer">
            <button onClick={loginFun}> back </button>

            <h1> Sign Up</h1>
            <h2>Create Your Account</h2>
            <input
              className="firstName"
              type="text"
              placeholder="Firstname"
              name="fname"
              required
            ></input>

            <input
              className="lastName"
              type="text"
              placeholder="Lastname"
              name="lname"
              required
            ></input>

            <div>
              <input
                className="emailAddress"
                type="text"
                placeholder="EmailAddress"
                name="email"
                required
              ></input>
            </div>
            <input
              className="passWord"
              type="text"
              placeholder="Password"
              name="password"
              required
            ></input>
            <input
              className="conFirm"
              type="text"
              placeholder="Confirm"
              name="confirm"
              required
            ></input>
            <div className="smallLetter">
              <span>
                Use 8 or more characters with a mix of letters, numbers &amp;
                symbols
              </span>
            </div>
            <div className="checkContainer">
              <input className="checkBox" type="checkbox"></input>

              <span className="showPassword">Show password</span>
            </div>
            <div>
              <button className="nextButton">SignUp</button>
              <button
                className="fbButton
              "
                onClick={facebookPage}
              >
                or Signup by Facebook
              </button>
            </div>
          </div>
        </div>
      )}
      {logIn && <Logincomponent />}
    </>
  );
}

export default Signupcomponent;
