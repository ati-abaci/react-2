import React from "react";
import Pokecard from "./PokeCard";
import "./Pokedex.css";

export default function Pokedex({ pokemon }) {
  return (
    <div className="pokedex">
      <h1 className="pokedex-title">Pokedex</h1>
      <div className="pokedex-grid">
        {pokemon.map((p) => (
          <Pokecard key={p.id} name={p.name} image={p.image} type={p.type} />
        ))}
      </div>
    </div>
  );
}
