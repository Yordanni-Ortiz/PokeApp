import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PaginationFilter from "../components/PaginationFilter";
import PokeCardFilter from "../components/PokeCardFilter";
import InputSelector from "../components/InputSelector";
import Alert from "../../public/AlertPokemon.png";

const PokeFilter = () => {
  const [typePokemon, setTypePokemon] = useState();
  const [pokemons, setPokemons] = useState();
  const [pokemonsTable, setPokemonsTable] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [noResults, setNoResults] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}/`)
      .then((res) => {
        setTypePokemon(res.data?.pokemon);
        setPokemons(res.data?.pokemon.slice(0, perPage));
        setPokemonsTable(res.data?.pokemon);
      })
      .catch((error) => console.log(error));
  }, [type, perPage]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    filterer(e.target.value);
  };

  const filterer = (searchTerm) => {
    const searchResult = pokemonsTable.filter((element) =>
      element.pokemon.name
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    if (searchResult.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }

    setPokemons(searchResult.slice(0, perPage));
    setPage(1); // reiniciar la página al buscar
  };

  const max = Math.ceil(typePokemon?.length / perPage);

  const navigate = useNavigate();
  const removeFilter = () => navigate("/pokedex");

  const changePage = (newPage) => {
    setPage(newPage);
    setPokemons(
      pokemonsTable.slice((newPage - 1) * perPage, newPage * perPage)
    );
  };

  return (
    <article className="principalCardFilter">
      <div className="filter">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="inputSelector">
        <InputSelector />
      </div>
      <div className="pagesSuperior">
        <PaginationFilter page={page} setPage={changePage} max={max} />
      </div>
      <div className="cards">
        {pokemons?.map((poketype) => (
          <PokeCardFilter
            key={poketype.pokemon.url}
            typeUrl={poketype.pokemon.url}
          />
        ))}
        {noResults && (
          <div className="noResults">
            <img src={Alert} alt="" className="alert" />
          </div>
        )}
      </div>
      <div className="pagesInferior">
        <PaginationFilter page={page} setPage={changePage} max={max} />
      </div>
      <div className="divUpButtonFilter">
        <button
          className="upButtonFilter"
          onClick={() => window.scrollTo({ top: 5, behavior: "smooth" })}
        >
          <i className="fa-solid fa-angle-up fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default PokeFilter;
