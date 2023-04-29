import React from "react";
import '../assets/styles/LoadingOverlay.css'

const LoadingOverlay = () => {
  return (
    <div className="overlay">
      <div className="spinner"></div>
      <div className="message">Loading...</div>
    </div>
  );
};

export default LoadingOverlay;