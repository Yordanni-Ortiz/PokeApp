import React from "react";

const PokeMoves = ({ pokeInfo }) => {
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

  return (
    <article className="pokeMoves">
      <h2 className={textColorPokeType}>Moves</h2>
      <hr />
      <div className="movesContainer">
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[0]?.move.name}</p>
        </div>
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[1]?.move.name}</p>
        </div>
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[2]?.move.name}</p>
        </div>
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[3]?.move.name}</p>
        </div>
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[4]?.move.name}</p>
        </div>
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[5]?.move.name}</p>
        </div>
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[6]?.move.name}</p>
        </div>
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[7]?.move.name}</p>
        </div>
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[8]?.move.name}</p>
        </div>
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[9]?.move.name}</p>
        </div>
        <div className={`bgMove ${backgroundColorPokeType}`}>
          <p>{pokeInfo?.moves[10]?.move.name}</p>
        </div>
      </div>
    </article>
  );
};

export default PokeMoves;
