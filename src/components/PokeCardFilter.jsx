import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pokeRocket from "/PokeRocket.png";

const PokeCardFilter = ({ typeUrl }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(typeUrl)
      .then((res) => setPokemon(res.data))
      .catch((error) => console.log(error));
  }, []);

  const navigate = useNavigate();
  const clickCard = () => navigate(`/pokedex/${pokemon.id}`);

  const textPokeType =
    pokemon?.types[0].type.name === "normal"
      ? pokemon.types[1]
        ? pokemon.types[1].type.name
        : ""
      : pokemon?.types[0].type.name;

  const textColorPokeType = `pokeColorsText ${textPokeType}`;

  const backgroundPokeType =
    pokemon?.types[0].type.name === "normal"
      ? pokemon.types[1]
        ? pokemon.types[1].type.name
        : ""
      : pokemon?.types[0].type.name;

  const backgroundColorPokeType = `pokeColors ${backgroundPokeType}`;

  const pokemonId = pokemon?.id;

  return (
    <article
      className={`pokeCard ${backgroundColorPokeType}`}
      onClick={clickCard}
    >
      <img className="pokeRocket" src={pokeRocket} alt="" />
      <img
        className="pokemon"
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <h2 className="namePokemon">{pokemon?.name.toUpperCase()}</h2>
      <h2 className={`pokemonId b2 ${textColorPokeType}`}>N°{pokemonId}</h2>
      <hr />
      <div className="infoCard">
        <p>
          <b className={textColorPokeType}>HP</b>
          <br />
          <b className="b2">{pokemon?.stats[0].base_stat}</b>
        </p>
        <p>
          <b className={textColorPokeType}>Speed</b>
          <br />
          <b className="b2">{pokemon?.stats[5].base_stat}</b>
        </p>
        <p>
          <b className={textColorPokeType}>Attack</b>
          <br />
          <b className="b2">{pokemon?.stats[1].base_stat}</b>
        </p>
        <p>
          <b className={textColorPokeType}>Defense</b>
          <br />
          <b className="b2">{pokemon?.stats[2].base_stat}</b>
        </p>
        <p>
          <b className={textColorPokeType}>Sp.Attack</b>
          <br />
          <b className="b2">{pokemon?.stats[3].base_stat}</b>
        </p>
        <p>
          <b className={textColorPokeType}>Sp.Defense</b>
          <br />
          <b className="b2">{pokemon?.stats[4].base_stat}</b>
        </p>
      </div>
    </article>
  );
};

export default PokeCardFilter;
