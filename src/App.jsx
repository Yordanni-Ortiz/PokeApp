import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokeInfo from "./pages/PokeInfo";
import PinRocket from "/PinRocket.png";
import pokeCenter from "/CentroPokemon.png";
import pokedexHand from "/pokedexHand.png";
import Footer from "./components/Footer";
import PokeFilter from "./pages/PokeFilter";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="App">
      <nav className="NavBar">
        <img className="pinRocket" src={PinRocket} />
        <div className="pokeCenterDiv">
          <ul>
            <li>
              <Link className="navIcon1d" to="/pokedex">
                {!isHome && (
                  <img src={pokedexHand} alt="" className="pokedexHand" />
                )}
              </Link>
            </li>
            <li>
              <Link className="navIcon" to="/">
                {!isHome && (
                  <img src={pokeCenter} alt="" className="pokeCenter" />
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home setIsLogged={setIsLogged} />} />
        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokeInfo />} />
          <Route path="/pokefilter/:type" element={<PokeFilter />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
