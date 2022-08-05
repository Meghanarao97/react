import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date().toString());

  console.log(useState());
  // useEffect(() => {
  //   const fetchData = async () => {
  //     //async=
  //     setLoading(true);
  //     try {
  //       const { data } = await axios.get(
  //         // //await= wait till get data.
  //         // "https://jsonplaceholder.typicode.com/posts"
  //         `https://reqres.in/api/users?page=${1}`
  //       );
  //       console.log(data.data);
  //       if (data.per_page > 0) {
  //         setData(data.data);
  //       } else {
  //         setData([]);
  //       }
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     setLoading(false);
  //   };

  //   fetchData();
  //   const isArray = [1, 2, 41, 25, 89];
  //   const items = isArray.map((items, index, itself) => {
  //     console.log(items * items, index);
  //     return items * 2;
  //   });
  //   console.log(items);
  // }, []);
  // const isArray = ["meghna", "2,h", "3", "4", "sridhar"];
  // isArray.forEach((items, index, itself) => {
  //   console.log(items, index);
  // });

  useEffect(() => {
    console.log("componentDidMount,componetDidUpdate");
  }); // with out props shouldnt use it.

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
  }, [date]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleUpdateDate();
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("componentWillUnmount");
    };
  }, []);
  const handleUpdateDate = () => {
    setDate(new Date().toString());
  };
  return (
    <div>
      <h2>{date}</h2>
      <button onClick={handleUpdateDate}>Update Date</button>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Fetching data using axios</h2>
          {data.length > 0 ? ( //ternery condition= same like "if" statemnent
            data.map((item) => (
              <div key={item.id}>
                <p>{item.id}</p>
                <p>{item.userId}</p>
                <p>{item.title}</p>
                <span>{item.body}</span>
              </div>
            ))
          ) : (
            <>No data available</>
          )}
        </div>
      )}
    </div>
  );
};

export default UseEffect;
