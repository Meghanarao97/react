import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HocReuseComp from "./HocReuseComp";

function HocSampleToDoList({ data }) {
  //   const [toDoList, setToDoList] = useState([]);

  //   const [searchValue, setSearchValue] = useState("");
  //   const getData = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((data) => data.json())
  //       .then((data) => {
  //         console.log(data);
  //         setToDoList(data);
  //       });
  //   };
  //   //   const name = "meghana";
  //   //   console.log(name.indexOf("s"));

  //   useEffect(() => {
  //     getData();
  //   }, []);
  //   let filterData =
  //     toDoList.length &&
  //     toDoList
  //       .filter(({ username }) => {
  //         return username.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
  //       })
  let filterdata =
    data.length > 0 &&
    data.map((item) => {
      console.log(item);
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name.toLowerCase()}</td>
          <td>{item.username.toLowerCase()}</td>
          <td>{item.email.toLowerCase()}</td>
          <td>{item.phone}</td>
        </tr>
      );
    });
  return (
    <div>
      HocSampleComponent
      <div>
        <div>
          {/* <input
            type="text"
            value={searchValue}
            placeholder="Search name"
            onChange={(e) => setSearchValue(e.target.value)}
          ></input> */}
        </div>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>phonenumber</th>
            </tr>
          </thead>
          <tbody>{filterdata}</tbody>
        </Table>
      </div>
    </div>
  );
}
const searchToDoLis = HocReuseComp(
  HocSampleToDoList,
  "https://jsonplaceholder.typicode.com/users"
);
export default searchToDoLis;
