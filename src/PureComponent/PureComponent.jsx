import React from "react";
class PureComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // handleIncrement = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };
  // shouldComponentUpdate(newProps, newState) {
  //   // console.log(newState, this.state.count);
  //   if (newState.count !== this.state.count) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  render() {
    console.log("purecomponent", this.props);
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.handleIncrement}>Increment</button>
      </div>
    );
  }
}
export default PureComponent;
