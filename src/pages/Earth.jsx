import { useEffect } from "react";
import { createScene, createEarth } from "../utils";

const Earth = () => {
  useEffect(() => {
    createScene(createEarth);
  }, []);

  return <canvas id="webgl"></canvas>;
};

export default Earth;
