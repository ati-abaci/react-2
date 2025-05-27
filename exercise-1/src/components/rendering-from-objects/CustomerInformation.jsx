import React from "react";

export default function CustomerInformation({ first_name, last_name }) {
  return (
    <div>
      <h1>My name is {first_name}</h1>
      <h2>My last name is {last_name}</h2>
    </div>
  );
}
