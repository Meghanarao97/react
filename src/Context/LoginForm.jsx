import React, { useContext, useState } from "react";
import { UserContext, useUserContext } from "./Context";

function LoginForm() {
  const [name, setName] = useState("");
  //   const { logIn } = useUserContext();
  const { logIn } = useContext(UserContext);
  const handleSubmit = () => {
    console.log(name);
    logIn(name);
  };
  return (
    <div>
      {name}
      <form>
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="username"
        />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
