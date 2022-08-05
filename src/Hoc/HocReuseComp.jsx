import React from "react";

const HocReuseComp = (Wrappercomponent, apiurl) => {
  return class extends React.Component {
    state = {
      toDoData: [],
      value: "",
    };

    getData = () => {
      fetch(apiurl)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          this.setState({ ...this.state, toDoData: data });
        });
    };
    componentDidMount() {
      this.getData();
    }
    render() {
      console.log(apiurl);
      const { toDoData, value } = this.state;
      let filterData =
        toDoData.length &&
        toDoData.filter(({ name }) => {
          return name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
        });
      return (
        <div>
          <div>
            <input
              type="text"
              value={this.state.value}
              placeholder="Search name"
              onChange={(e) =>
                this.setState({ ...this.state, value: e.target.value })
              }
            ></input>
            <Wrappercomponent data={filterData} />
          </div>
        </div>
      );
    }
  };
};

export default HocReuseComp;
