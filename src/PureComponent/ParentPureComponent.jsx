import React, { useState } from "react";
import MemoComponent from "./MemoComponent";
import PureComponent from "./PureComponent";

function ParentPureComponent() {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const handleFlag = () => {
    setFlag(!flag);
  };
  console.log("purecomponent parentcomponent");
  const handleIncrement = () => {
    setCount(count + 1);
    console.log("koo");
  };
  return (
    <div>
      ParentPureComponent
      <div>
        <h2>{flag ? "good morning" : "good night"}</h2>
        <button onClick={handleFlag}>update status</button>
        <PureComponent handleIncrement={handleIncrement} count={count} />
        <MemoComponent handleIncrement={handleIncrement} count={count} />
      </div>
    </div>
  );
}

export default ParentPureComponent;
