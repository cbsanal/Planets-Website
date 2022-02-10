import { useEffect } from "react";
import { createScene, createPlanet } from "../utils";
import PlanetPage from "../components/PlanetPage";
import jupiter from "../images/jupiter.jpg";

const Jupiter = () => {
  useEffect(() => {
    const clear = setTimeout(() => {
      localStorage.clear();
      createScene(createPlanet, jupiter);
    }, 200);
    return () => {
      clearTimeout(clear);
      localStorage.setItem("clear", true);
    };
  }, []);
  return (
    <PlanetPage
      planetName="Jupiter"
      planetInfo="Jupiter is the fifth planet from the Sun and the largest in the Solar System. 
      It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, 
      but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after 
      the Moon and Venus."
    />
  );
};

export default Jupiter;
