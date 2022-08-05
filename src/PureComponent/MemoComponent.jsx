import React, { useState } from "react";

function MemoComponent() {
  const [x, y] = useState();
  console.log("Reactmemocomponent");
  return <div>MemoComponent</div>;
}
const childUseMemo = React.memo(MemoComponent);

export default childUseMemo;
