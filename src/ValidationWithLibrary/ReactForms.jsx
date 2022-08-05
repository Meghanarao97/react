import React from "react";
import { useForm } from "react-hook-form";

function ReactForms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="firstName"
          className="names"
          placeholder="Enter your First Name"
          {...register("firstName", { required: "Missing first name" })}
        />
        <p>{errors?.firstName?.message}</p>
        <div>
          <input
            name="lastName"
            className="names"
            placeholder="Enter your Last Name"
            {...register("lastName", { required: "Missing last name" })}
          ></input>
        </div>
        <input
          name="emailAddress"
          className="emailAddress"
          placeholder="Enter your Email Address"
        ></input>
        <div>
          <input
            name="phoneNumber"
            className="phoneNumber"
            placeholder="Phone Number"
            maxLength={10}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ReactForms;
