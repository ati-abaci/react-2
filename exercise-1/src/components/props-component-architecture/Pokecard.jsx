import React from "react";
import "./Pokecard.css";

export default function Pokecard({ name, image, type }) {
  return (
    <div className="pokecard">
      <h2 className="pokecard-name">{name}</h2>
      <img src={image} alt={name} className="pokecard-img" />
      <p className="pokecard-type">
        <strong>Type:</strong> {type}
      </p>
    </div>
  );
}
