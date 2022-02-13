import useCustomUseEffect from '../hooks/useCustomUseEffect';
import PlanetPage from '../components/PlanetPage';
import earth from '../images/earth.jpg';
import { useState } from 'react';

const Earth = () => {
  const [isSceneRendered, setIsSceneRendered] = useState(false);
  useCustomUseEffect(earth, setIsSceneRendered);
  return (
    <PlanetPage
      planetName="Earth"
      planetInfo="Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large amounts 
      of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of 
      Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes and rivers. 
      The remaining 29% of Earth's surface is land, consisting of continents and islands."
      display={isSceneRendered ? 'block' : 'none'}
    />
  );
};

export default Earth;
