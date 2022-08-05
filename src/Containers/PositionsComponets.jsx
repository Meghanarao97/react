import React from "react";
import "../Positions.css";
const PositionsComponets = () => {
  return (
    <div className="parentDiv">
      parent
      <div className="staticDiv"> position static</div>
      <div className="relativeDiv">position relative</div>
      <div className="absoluteDiv ">position absolute</div>
      <div className="fixedDiv">position fixed</div>
      <div className="stickyDiv">position sticky</div>
    </div>
  );
};
export default PositionsComponets;
