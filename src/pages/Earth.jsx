import { useEffect } from "react";
import { createScene, createPlanet } from "../utils";
import PlanetPage from "../components/PlanetPage";
import earth from "../images/earth.jpg";

const Earth = () => {
  useEffect(() => {
    const clear = setTimeout(() => {
      localStorage.clear();
      createScene(createPlanet, earth);
    }, 200);
    return () => {
      clearTimeout(clear);
      localStorage.setItem("clear", true);
    };
  }, []);
  return (
    <PlanetPage
      planetName="Earth"
      planetInfo="Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large amounts 
      of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of 
      Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes and rivers. 
      The remaining 29% of Earth's surface is land, consisting of continents and islands."
    />
  );
};

export default Earth;
