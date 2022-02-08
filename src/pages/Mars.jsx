import { useEffect } from "react";
import { createScene, createPlanet } from "../utils";
import mars from "../images/mars.jpg";
// import { Link } from "react-router-dom";

const Mars = () => {
  useEffect(() => {
    createScene(createPlanet, mars);
  }, []);

  return (
    <div className="planet-container">
      <button className="custom-btn btn-10 x">i</button>
      <canvas id="webgl"></canvas>
      <button className="custom-btn btn-10">Other Planets</button>
    </div>
  );
};

export default Mars;
