import "../App.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PinRocket from "/PinRocket.png";
import pokeCenter from "/CentroPokemon.png";
import pokedexHand from "/pokedexHand.png";

function NavBar() {
    
    const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <nav className="NavBar">
        <img className="pinRocket" src={PinRocket} />
        <div className="pokeCenterDiv">
          <ul>
            <li className="navIconPokedexHand">
              <Link to="/pokedex">
                {!isHome && (
                  <img src={pokedexHand} alt="" className="pokedexHand" />
                )}
              </Link>
            </li>
            <li className="navIconPokeCenter">
              <Link to="/">
                {!isHome && (
                  <img src={pokeCenter} alt="" className="pokeCenter" />
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default NavBar;