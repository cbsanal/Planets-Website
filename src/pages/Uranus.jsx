import useCustomUseEffect from '../hooks/useCustomUseEffect';
import PlanetPage from '../components/PlanetPage';
import uranus from '../images/uranus.jpg';
import { useState } from 'react';

const Uranus = () => {
  const [isSceneRendered, setIsSceneRendered] = useState(false);
  useCustomUseEffect(uranus, setIsSceneRendered);
  return (
    <PlanetPage
      planetName="Uranus"
      planetInfo="Uranus is the seventh planet from the Sun. 
      Its name is a reference to the Greek god of the sky, Uranus, 
      who, according to Greek mythology, was the great-grandfather of Ares (Mars), 
      grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary 
      radius and fourth-largest planetary mass in the Solar System."
      display={isSceneRendered ? 'block' : 'none'}
    />
  );
};

export default Uranus;
