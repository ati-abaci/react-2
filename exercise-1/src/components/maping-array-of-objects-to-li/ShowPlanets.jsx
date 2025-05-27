import React from "react";

export default function ShowPlanets({ planets }) {
  return (
    <ul>
      {planets.map((planet, index) => (
        <li key={index}>{planet}</li>
      ))}
    </ul>
  );
}
