import React from "react";
import Pokedex from "/Pokedex.png";
import Arbok from "/Arbok.png";
import Weezing from "/Weezing.png";
import Wobbuffet from "/Wobbuffet.png";
import TeamRocket from "/TeamRocket.png";
import InputHome from "../components/InputHome";

const Home = ({ setIsLogged }) => {
  return (
    <div className="home">
      <img src={Pokedex} alt="home image" className="Pokedex" />
      <div>
        <img src={Arbok} alt="home image" className="Arbok" />
        <img src={Weezing} alt="home image" className="Weezing" />
        <img src={Wobbuffet} alt="home image" className="Wobbuffet" />
        <img src={TeamRocket} alt="home image" className="TeamRocket" />
        <div className="form">
          <InputHome setIsLogged={setIsLogged} />
        </div>
      </div>
    </div>
  );
};

export default Home;
