import React, { useReducer, useState } from "react";
const initialState = {
  firstName: "",
};

const reducer = (state, action) => {
  //   console.log(state, action);
  switch (action.type) {
    case "CLEAR":
      return initialState;
    default:
      return { ...state, [action.type]: action.payload };
  }
};

function FormsHooks() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialValues = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
  };

  const [values, setValues] = useState(initialValues);
  const [toDoList, setToDoList] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [formError, setFormError] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
    console.log(values);
  };
  const handleChangeFirstName = (e) => {
    dispatch({ type: "firstName", payload: e.target.value });
  };
  console.log(state);
  const formValidate = () => {
    const errors = {};
    if (!values.lastName) {
      errors.lastName = "Please enter last Name";
    }
    return errors;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError(formValidate());
  };
  console.log(formError);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={state.firstName}
          className="names"
          placeholder="Enter your First Name"
          onChange={handleChangeFirstName}
        />
        <div>
          <input
            name="lastName"
            value={values.lastName}
            className="names"
            placeholder="Enter your Last Name"
            onChange={handleChange}
          ></input>
        </div>
        <p style={{ color: "red" }}>{formError.lastName}</p>
        <input
          name="emailAddress"
          value={values.emailAddress}
          className="emailAddress"
          placeholder="Enter your Email Address"
          onChange={handleChange}
        ></input>
        <div>
          <input
            name="phoneNumber"
            value={values.phoneNumber}
            className="phoneNumber"
            placeholder="Phone Number"
            maxLength={10}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <>
        <div>{values.firstName}</div>
        <div>{values.lastName}</div>
        <div>{values.emailAddress}</div>
        <div>{values.phoneNumber}</div>
      </>
    </>
  );
}
export default FormsHooks;
