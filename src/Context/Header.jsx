import React, { useContext } from "react";
import { UserContext, useUserContext } from "./Context";

function Header() {
  //   const { user } = useUserContext();
  const { user, logOut } = useContext(UserContext);
  return (
    <div>
      Welcome to {user.name}
      {!user.isGuestUser && <button onClick={logOut}>logout</button>}
    </div>
  );
}

export default Header;
