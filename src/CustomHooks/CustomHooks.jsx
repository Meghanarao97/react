import React, { useEffect, useState } from "react";

// >992 for large screen
// between <992 >600 for medium screen
// <600 --for small screen

export const CustomHooks = () => {
  const [screen, setScreen] = useState();
  const checkScreenSize = () => {
    if (window.innerWidth > 992) return setScreen("large size screen");
    if (window.innerWidth < 992 && window.innerWidth > 600)
      return setScreen("medium size screen");
    if (window.innerWidth < 600) return setScreen("small size screen");
  };
  useEffect(() => {
    checkScreenSize();
  }, []);
  return (
    <div>
      CustomHooks
      {screen}
    </div>
  );
};

export const Customhelper = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return { count, setCount, name, setName };
};
