import React from "react";
const ErrorComponent = (props) => <div>{props}</div>;

class LifecycleMethods extends React.Component {
  constructor(props) {
    console.log("constructor");
    console.log(
      "=============================================================================================="
    );
    super(props);
    this.state = {
      name: "meghana",
      firstName: "",
      lastName: "",
      counter: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    console.log(props, state);
    // if (props.details.name === this.state.name)
    // {

    // }
    console.log("=============================================");

    return false;
  }
  componentDidMount() {
    // used for api calls, time intervls
    console.log("componentDidMount");
    console.log("==============================================");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");

    console.log(nextProps, nextState);
    console.log(
      "=============================================================================================="
    );
    return true;
  }
  getSnapshotBeforeUpdate() {
    return null;
    console.log("getSnapshotBeforeUpdate");
    console.log(
      "=============================================================================================="
    );
  }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  //   console.log(
  //     "=============================================================================================="
  //   );
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentdidupdate", prevProps, prevState);
    if (prevState.counter !== this.state.counter) {
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //error handling
  componentDidCatch(error, info) {
    console.log("componentdidcatch", error, info);
    this.setState({ error, info });
  }

  handleChangefirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangelastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    if (this.state.error) {
      return <div>something went wrong. Please contact customcare</div>;
    }
    console.log("render");
    console.log(
      "=============================================================================================="
    );
    return (
      <div>
        {" "}
        <form>
          <h1>{this.state.counter}</h1>
          <input
            value={this.state.firstName}
            onChange={this.handleChangefirstName}
          />
          <input
            value={this.state.lastName}
            onChange={this.handleChangelastName}
          />
        </form>
        <ErrorComponent />
        <button onClick={this.handleIncrement}>increase count</button>
      </div>
    );
  }
}

export default LifecycleMethods;
