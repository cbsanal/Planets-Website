import { useEffect } from "react";
import { createScene, createPlanet } from "../utils";
import moon from "../images/moon.jpg";

const Moon = () => {
  useEffect(() => {
    createScene(createPlanet, moon);
  }, []);

  return <canvas id="webgl"></canvas>;
};

export default Moon;
