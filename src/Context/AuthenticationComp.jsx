import React, { useContext } from "react";
import { UserContext, useUserContext } from "./Context";
import Home from "./Home";
import LoginForm from "./LoginForm";
function AuthenticationComp() {
  //   const { user } = useUserContext();
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      AuthenticationComp
      {user.isGuestUser ? <LoginForm /> : <Home />}
    </div>
  );
}

export default AuthenticationComp;

//ternary condition:
//isUser true ? this true block : false block
