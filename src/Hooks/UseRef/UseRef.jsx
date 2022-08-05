import React, { useState, useRef, useEffect } from "react";
import { Customhelper } from "../../CustomHooks/CustomHooks";
import "./UseRef.css";

function UseRef() {
  //   const [name, setName] = useState("");
  //   const [count, setCount] = useState(0);
  const { count, setCount, name, setName } = Customhelper();
  console.log(count, setCount, name, setName);
  const inputRef = useRef("");
  const previouscountRef = useRef("");
  const handleChangeReset = () => {
    setName("");
    inputRef.current.focus();
  };
  useEffect(() => {
    previouscountRef.current = count;
  }, [count]);

  return (
    <div>
      UseRef
      <h2>{name}</h2>
      <input
        className="cssFocus"
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Full Name"
      />
      <button onClick={handleChangeReset}>Reset</button>
      <h2>count:{count}</h2>
      <div>
        <h3>{previouscountRef.current}</h3>
        <button onClick={(e) => setCount(Math.ceil(Math.random() * 1000))}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default UseRef;
