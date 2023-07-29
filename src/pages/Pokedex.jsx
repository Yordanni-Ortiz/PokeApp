import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputSelector from "../components/InputSelector";
import Pagination from "../components/Pagination";
import PokeCard from "../components/PokeCard";
import pokedex from "/Pokedex.png";
import Alert from "../../public/AlertPokemon.png";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [pokemonsTable, setPokemonsTable] = useState();
  const [search, setSearch] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [noResults, setNoResults] = useState(false);
  const nameUser = useSelector((state) => state.nameUser);

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

  const getAllPokemons = () => {
    axios
      .get(URL)
      .then((res) => {
        setPokemons(res.data.results);
        setPokemonsTable(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    filterer(e.target.value);
    e.preventDefault();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filterer = (searchTerm) => {
    let searchResult = pokemonsTable.filter((element) => {
      if (
        element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return element;
      }
    });
    setPokemons(searchResult);
    if (searchResult.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  };

  const max = pokemons?.length / perPage;

  return (
    <article className="principalCard">
      <div className="header">
        <img src={pokedex} alt="" />
        <h3>Welcome, {nameUser}. Prepare for trouble?</h3>
      </div>
      <div className="filter">
        <input
          type="text"
          placeholder=" Search Pokémon"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="inputSelector">
        <InputSelector />
      </div>
      <div className="superiorPages">
        <Pagination page={page} setPage={setPage} max={max} />
      </div>
      <div className="cards">
        {pokemons
          ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          .map((pokemon) => (
            <PokeCard key={pokemon.url} url={pokemon.url} />
          ))}
        {noResults && (
          <div className="noResults">
            <img src={Alert} alt="" className="alert" />
          </div>
        )}
      </div>
      <div className="pages">
        <Pagination page={page} setPage={setPage} max={max} />
      </div>
      <button
        className="upButton"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-angle-up fa-2x"></i>
      </button>
    </article>
  );
};

export default Pokedex;
