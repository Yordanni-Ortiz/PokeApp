import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((error) => console.log(error));
  }, []);

  const navigate = useNavigate();

  const clickCard = () => navigate(`/pokedex/${pokemon.id}`);

  return (
    <article
      className={`pokeCard pokeColors ${
        pokemon?.types[0].type.name === "normal"
          ? pokemon.types[1]
            ? pokemon.types[1].type.name
            : ""
          : pokemon?.types[0].type.name
      }`}
      onClick={clickCard}
    >
      <img
        className="pok"
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <h2 className="namePokemon">{pokemon?.name.toUpperCase()}</h2>
      <hr />
      <div className="infoCard">
        <p>
          <b
            className={`pokeColorsText ${
              pokemon?.types[0].type.name === "normal"
                ? pokemon.types[1]
                  ? pokemon.types[1].type.name
                  : ""
                : pokemon?.types[0].type.name
            }`}
          >
            HP
          </b>
          <br />
          <b className="b2">{pokemon?.stats[0].base_stat}</b>
        </p>
        <p>
          <b
            className={`pokeColorsText ${
              pokemon?.types[0].type.name === "normal"
                ? pokemon.types[1]
                  ? pokemon.types[1].type.name
                  : ""
                : pokemon?.types[0].type.name
            }`}
          >
            Speed
          </b>
          <br />
          <b className="b2">{pokemon?.stats[5].base_stat}</b>
        </p>
        <p>
          <b
            className={`pokeColorsText ${
              pokemon?.types[0].type.name === "normal"
                ? pokemon.types[1]
                  ? pokemon.types[1].type.name
                  : ""
                : pokemon?.types[0].type.name
            }`}
          >
            Attack
          </b>
          <br />
          <b className="b2">{pokemon?.stats[1].base_stat}</b>
        </p>
        <p>
          <b
            className={`pokeColorsText ${
              pokemon?.types[0].type.name === "normal"
                ? pokemon.types[1]
                  ? pokemon.types[1].type.name
                  : ""
                : pokemon?.types[0].type.name
            }`}
          >
            Defense
          </b>
          <br />
          <b className="b2">{pokemon?.stats[2].base_stat}</b>
        </p>
        <p>
          <b
            className={`pokeColorsText ${
              pokemon?.types[0].type.name === "normal"
                ? pokemon.types[1]
                  ? pokemon.types[1].type.name
                  : ""
                : pokemon?.types[0].type.name
            }`}
          >
            Sp.Attack
          </b>
          <br />
          <b className="b2">{pokemon?.stats[3].base_stat}</b>
        </p>
        <p>
          <b
            className={`pokeColorsText ${
              pokemon?.types[0].type.name === "normal"
                ? pokemon.types[1]
                  ? pokemon.types[1].type.name
                  : ""
                : pokemon?.types[0].type.name
            }`}
          >
            Sp.Defense
          </b>
          <br />
          <b className="b2">{pokemon?.stats[4].base_stat}</b>
        </p>
      </div>
    </article>
  );
};

export default PokeCard;
