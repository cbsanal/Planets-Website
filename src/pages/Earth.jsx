import { useEffect } from "react";
import { createScene, createPlanet } from "../utils";
import earth from "../images/earth.jpg";
// import { Link } from "react-router-dom";

const Earth = () => {
  useEffect(() => {
    createScene(createPlanet, earth);
  }, []);

  return <canvas id="webgl"></canvas>;
};

export default Earth;
