import { useRef } from "react";

function UncontrolledComponent() {
  const submitRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(submitRef.current.value);
  };
  return (
    <div>
      uncontrolledComponent
      <form onSubmit={handleSubmit}>
        <input type="text" ref={submitRef} />
        <button type="submit" value="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default UncontrolledComponent;
