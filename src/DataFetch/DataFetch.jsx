import React from "react";

class DataFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: "meghana",
    };
  }

  getToDoListApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((output) => {
        this.setState({
          items: output,
        });
      });
  };

  componentDidMount() {
    this.getToDoListApi();
  }

  render() {
    // const { items, name } = this.state; //destructiurng
    const isArray = ["meghana", "sreedhar", "arun", "vivek"];
    // console.log(isArray);
    isArray.map((names) => {});
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>
              <p>"userId":{item.userId}</p>
              <p>"id":{item.id}</p>
              <p>"title":{item.title}</p>
              <p>"body":{item.body}</p>
            </li>
          ))}
        </ul>
        <p>{this.state.name}</p>
        <select id="cars" name="cars">
          <option>Please select option</option>
          {isArray.map((items) => (
            <>
              <option value="volvo">{items}</option>
            </>
          ))}
        </select>
      </div>
    );
  }
}

export default DataFetch;
