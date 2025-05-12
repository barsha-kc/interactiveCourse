import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../assets/Img1.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1 className="home-title">Cine Vibe Check</h1>
      <p className="home-description">
        Discover popular movies and mark your favorites!
      </p>

      <div className="home-image-container">
        <img src={Img1} alt="Banner" className="home-banner" />
      </div>

      <button className="home-button" onClick={() => navigate("/movies")}>
        Click here to go to the Movies
      </button>
    </div>
  );
}

export default HomePage;
