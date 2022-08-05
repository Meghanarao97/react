import React from "react";
import LifecycleMethods from "./LifecycleMethods";

class LifecyclemethodParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ismounting: false,
      name: "meghana",
      age: "23",
    };
  }
  handleClick = () => {
    this.setState({
      ismounting: !this.state.ismounting,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>mounting</button>
        {this.state.ismounting && <LifecycleMethods details={this.state} />}
      </div>
    );
  }
}
export default LifecyclemethodParent;
