import { useEffect } from "react";
import { createScene, createPlanet } from "../utils";
import PlanetPage from "../components/PlanetPage";
import mars from "../images/mars.jpg";

const Mars = () => {
  useEffect(() => {
    const clear = setTimeout(() => {
      localStorage.clear();
      createScene(createPlanet, mars);
    }, 200);
    return () => {
      clearTimeout(clear);
      localStorage.setItem("clear", true);
    };
  }, []);
  return (
    <PlanetPage
      planetName="Mars"
      planetInfo='Mars is the fourth planet from the Sun and the second-smallest planet in
      the Solar System, being larger than only Mercury. In English, Mars
      carries the name of the Roman god of war and is often referred to as the
      "Red Planet".'
    />
  );
};

export default Mars;
