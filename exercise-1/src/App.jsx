import React from "react";
import Alert from "./components/alert-component/Alert";
import Card from "./components/building-a-layout/Card";
import RenderList from "./components/maping-array-objects-to-li/Renderlist";
import ShowPlanets from "./components/maping-array-of-objects-to-li/ShowPlanets";
import Pokedex from "./components/props-component-architecture/Pokedex";
import CustomerInformation from "./components/rendering-from-objects/CustomerInformation";

export default function () {
  // #building a layout example
  const data = {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hwDU0czw-cdv1MLqgR1wyySOwmNGSOQJKA&s",
    cardTitle: "Bob Dylan",
    cardDescription:
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
      url: "https://en.wikipedia.org/wiki/Bob_Dylan",
      label: "Go to wikipedia",
    },
  };
  // --------------------------------------

  // #Showplanets exapmle
  const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];
  // ----------------------------------------
  // #pokemon
  const pokemonData = [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];
  // ----------------------------------------
  // #costumer information
  const customer = {
    first_name: "Bob",
    last_name: "Dylan",
  };
  // ----------------------------------------

  return (
    <div>
      {/* #alert example */}
      <Alert text="OMG! Something really bad has happened!" />

      {/* #buliding a layout example */}
      <Card
        image={data.image}
        cardTitle={data.cardTitle}
        cardDescription={data.cardDescription}
        button={data.button}
      />

      {/* #mapping array example */}
      <RenderList />

      {/* #showplanets example */}
      <h1>Planets</h1>
      <ShowPlanets planets={planets} />

      {/* #pokedex */}
      <Pokedex pokemon={pokemonData} />

      {/* #costumer information */}
      <CustomerInformation
        first_name={customer.first_name}
        last_name={customer.last_name}
      />
    </div>
  );
}
