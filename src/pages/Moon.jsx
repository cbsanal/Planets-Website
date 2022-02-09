import { useEffect } from "react";
import { createScene, createPlanet } from "../utils";
import PlanetPage from "../components/PlanetPage/PlanetPage";
import moon from "../images/moon.jpg";

const Moon = () => {
  useEffect(() => {
    createScene(createPlanet, moon);
  }, []);

  return (
    <PlanetPage
      planetName="Moon"
      planetInfo="The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth 
      (comparable to the width of Australia), it is the largest natural satellite in the Solar System relative to the size of a major planet, 
      the fifth largest satellite in the Solar System overall, and larger than any known dwarf planet. The Moon is a planetary-mass object that formed a 
      differentiated rocky body, making it a satellite planet under the geophysical definitions of the term."
    />
  );
};

export default Moon;
