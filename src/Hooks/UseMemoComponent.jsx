import React, { useMemo, useState } from "react";

function UseMemoComponent() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const factorial = useMemo(() => {
    return factorialValue(count);
  }, [count]);
  console.log(factorial);
  return (
    <div>
      UseMemoComponent
      <p>{name}</p>
      <p>{factorial}</p>
      <div>
        <input
          value={name}
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
        />
      </div>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((prevState) => prevState - 1)}>
          Decrement
        </button>
      </div>
      {/* <DisplayData /> */}
    </div>
  );
}
// const DisplayData = () => {
//   const [value, setValue] = useState("");
//   console.log("Displaydata");
// };
const factorialValue = (n) => {
  let i = 0;
  //   while (i < 2000000000) i++;
  //   console.log(i);
  //   return i;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorialValue(n - 1);
};

export default UseMemoComponent;
