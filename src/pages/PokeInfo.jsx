import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import PokeMoves from "../components/PokeMoves";
import Back from "/Back.png";

const PokeInfo = () => {
  const [pokeInfo, setPokeInfo] = useState();

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(URL)
      .then((res) => setPokeInfo(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const navigate = useNavigate();
  const clickBack = () => navigate("/pokedex");

  const textPokeType =
    pokeInfo?.types[0].type.name === "normal"
      ? pokeInfo.types[1]
        ? pokeInfo.types[1].type.name
        : ""
      : pokeInfo?.types[0].type.name;

  const textColorPokeType = `pokeColorsText ${textPokeType}`;

  const backgroundPokeType =
    pokeInfo?.types[0].type.name === "normal"
      ? pokeInfo.types[1]
        ? pokeInfo.types[1].type.name
        : ""
      : pokeInfo?.types[0].type.name;

  const backgroundColorPokeType = `pokeColors ${backgroundPokeType}`;

  const pokemonId = pokeInfo?.id;

  return (
    <article className="pokeInfoCard">
      <div className={`baseInfo ${backgroundColorPokeType}`}>
        <div className="pokeImage">
          <img
            src={pokeInfo?.sprites.other["official-artwork"].front_default}
            alt="pokemon picture"
            className="pokemonPicture"
          />
        </div>
        <hr />
        <h2 className="namePokemon">{pokeInfo?.name.toUpperCase()}</h2>
        <h2 className={`pokemonId b2 ${textColorPokeType}`}>N°{pokemonId}</h2>
        <div className="divition1">
          <p>
            <b className={textColorPokeType}>Weight</b>
            <br />
            <b className="b2">{pokeInfo?.weight}</b>
          </p>
          <p>
            <b className={textColorPokeType}>Height</b>
            <br />
            <b className="b2">{pokeInfo?.height}</b>
          </p>
          <p>
            <b className={textColorPokeType}>Base Experience</b>
            <br />
            <b className="b2">{pokeInfo?.base_experience}</b>
          </p>
        </div>
      </div>
      <div className={`abilities ${backgroundColorPokeType}`}>
        <h2 className={textColorPokeType}>Abilities</h2>
        <hr />
        <div className="divition2">
          <p className={`bgMove ${backgroundColorPokeType}`}>
            {pokeInfo?.abilities[0]?.ability.name}
          </p>
          <p className={`bgMove ${backgroundColorPokeType}`}>
            {pokeInfo?.abilities[1]?.ability.name}
          </p>
        </div>
      </div>
      <div className={`type ${backgroundColorPokeType}`}>
        <h2 className={textColorPokeType}>Type</h2>
        <hr />
        <div className="divition3">
          <p className={`bgMove ${backgroundColorPokeType}`}>
            {pokeInfo?.types[0]?.type.name}
          </p>
          <p className={`bgMove ${backgroundColorPokeType}`}>
            {pokeInfo?.types[1]?.type.name}
          </p>
        </div>
      </div>
      <div className={`moves ${backgroundColorPokeType}`}>
        <PokeMoves pokeInfo={pokeInfo} />
      </div>
      <div className="goBackButton">
        <button onClick={clickBack} className="goBack">
          <img src={Back} className="imageBack" alt="" />
        </button>
      </div>
    </article>
  );
};

export default PokeInfo;
