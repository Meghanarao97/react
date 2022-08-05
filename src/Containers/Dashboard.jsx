import React, { useState } from "react";
import DataFetch from "../DataFetch/DataFetch";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangefirstName = this.handleChangefirstName.bind(this);
    this.handleChangelastName = this.handleChangelastName.bind(this);
    this.handleChangetodayDate = this.handleChangetodayDate.bind(this);
    this.dataFun = this.dataFun.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      todayDate: "",
      dataFun: false,
    };
  }

  handleChangefirstName(e) {
    console.log("firstName", e.target.value);
    this.setState({
      firstName: e.target.value,
    });
  }
  handleChangelastName(e) {
    console.log("lastName", e.target.value);
    this.setState({
      lastName: e.target.value,
    });
  }
  handleChangetodayDate(e) {
    console.log("todayDate", e.target.value);
    this.setState({
      todayDate: e.target.value,
    });
  }
  dataFun(e) {
    console.log("hi");
    this.setState({
      dataFun: true,
    });
  }

  render() {
    console.log(this.state);

    return (
      <>
        <form>
          <input
            value={this.state.firstName}
            onChange={this.handleChangefirstName}
          />
          <input
            value={this.state.lastName}
            onChange={this.handleChangelastName}
          />
          <input
            value={this.state.todayDate}
            onChange={this.handleChangetodayDate}
          />
        </form>

        {/* <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1> */}
        <>
          {!this.state.dataFun && (
            <div>
              <button onClick={this.dataFun}>Click to get fetched data</button>
            </div>
          )}
          {this.state.dataFun && <DataFetch />}
        </>
      </>
    );
  }
}
// function Dashboard() {
//   const [data, setdata] = useState(false);
//   const dataFun = () => setdata(true);

//   return (
//     <>
//       {!data && (
//         <div>
//           <button onClick={dataFun}>Click to get fetched data</button>
//         </div>
//       )}
//       {data && <DataFetch />}
//     </>
//   );
// }
export default Dashboard;
