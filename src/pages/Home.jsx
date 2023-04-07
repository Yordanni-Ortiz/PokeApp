import React from "react";
import Arbok from "/Arbok.png";
import Weezing from "/Weezing.png";
import Wobbuffet from "/Wobbuffet.png";
import TeamRocket from "/TeamRocket.png";
import InputHome from "../components/InputHome";

const Home = ({ setIsLogged }) => {
  return (
    <div className="home">
      <img src={Arbok} alt="home image" className="Arbok" />
      <img src={Weezing} alt="home image" className="Weezing" />
      <img src={Wobbuffet} alt="home image" className="Wobbuffet" />
      <img src={TeamRocket} alt="home image" className="TeamRocket" />
      <div className="text">
        <h2>Welcome trainer!</h2>
        <p className="text2">Prepare for trouble...</p>
      </div>
      <div className="form">
        <InputHome setIsLogged={setIsLogged} />
      </div>
    </div>
  );
};

export default Home;
