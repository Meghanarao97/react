import React, { useEffect, useState } from "react";
import "./UseEffectCount.css";
const UseEffectCount = () => {
  const [count, setCount] = useState(0);
  const [Users, fetchUsers] = useState([]);
  const [display, setDisplay] = useState(false);
  const [sum, setSumCount] = useState(0);

  const handleClickUp = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  const handleClickDown = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
  };

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        fetchUsers(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let sum = 0;
    sum += count;
    setSumCount(sum);
    if (count === 5) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [count]);

  console.log(Users);
  return (
    <>
      <div>
        <h2>count:{count}</h2>
        <button onClick={handleClickDown}>Decrement Button</button>
        <button onClick={handleClickUp}>Increment button</button>
      </div>

      {display && (
        <>
          <table id="customers">
            {Users.length > 0 && (
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Username</th>
                  <th>email</th>
                  <th>website</th>
                </tr>
              </thead>
            )}
            {Users.map((item, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.website}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <input value={sum}></input>
        </>
      )}
    </>
  );
};
export default UseEffectCount;
