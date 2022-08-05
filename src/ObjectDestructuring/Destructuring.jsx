import React from "react";

function Destructuring() {
  const sampleObject = {
    name: "meghana",
    country: "India",
    phoneNumber: 3149305628,
  };
  const { name, country, phoneNumber } = sampleObject;
  console.log(name, country);
  return (
    <div>
      Destructuring
      {name}
      {country}
      {phoneNumber}
    </div>
  );
}

export default Destructuring;
