import { useLocation } from "react-router-dom";
import React from "react";
import PokeBall from "/PokeBall.png";
import SuperBall from "/SuperBall.png";
import UltraBall from "/UltraBall.png";
import MasterBall from "/MasterBall.png";
import SafariBall from "/SafariBall.png";
import NidoBall from "/NidoBall.png";
import GSBall from "/GSBall.png";

const Footer = () => {
  const location = useLocation();
  const isOtherPage = location.pathname !== '/';

  return (
    <article className={`footer ${isOtherPage ? 'homeFooter' : ''}`}>
      <footer>
        <div className="footer-img">
        <div className="footer-img-item">
      <img src={SuperBall} alt="" />
    </div>
    <div className="footer-img-item">
      <img src={SafariBall} alt="" />
    </div>
    <div className="footer-img-item">
      <img src={UltraBall} alt="" />
    </div>
    <div className="footer-img-item">
      <img src={PokeBall} alt="" />
    </div>
    <div className="footer-img-item">
      <img src={NidoBall} alt="" />
    </div>
    <div className="footer-img-item">
      <img src={MasterBall} alt="" />
    </div>
    <div className="footer-img-item">
      <img src={GSBall} alt="" />
    </div>
        </div>
      </footer>
    </article>
  );
};

export default Footer;
