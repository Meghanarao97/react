import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const isUser = {
  name: "Guest",
  isGuestUser: true,
};

export function Context({ children }) {
  const [user, setUser] = useState(isUser);
  console.log(user);
  const logIn = (userName) => {
    console.log(userName);
    setUser({ isGuestUser: false, name: userName });
  };
  const logOut = () => {
    setUser(isUser);
  };
  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}

// export function useUserContext() {
//   const { user, logIn, logOut } = useContext(UserContext);
//   console.log(user, logIn);
//   return { user, logIn, logOut };
// }
