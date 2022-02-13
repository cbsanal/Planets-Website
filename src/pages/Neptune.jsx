import useCustomUseEffect from '../hooks/useCustomUseEffect';
import PlanetPage from '../components/PlanetPage';
import neptune from '../images/neptune.jpg';
import { useState } from 'react';

const Neptune = () => {
  const [isSceneRendered, setIsSceneRendered] = useState(false);
  useCustomUseEffect(neptune, setIsSceneRendered);
  return (
    <PlanetPage
      planetName="Neptune"
      planetInfo="Neptune is the eighth and farthest-known Solar planet from the Sun. 
      In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, 
      and the densest giant planet. It is 17 times the mass of Earth, 
      slightly more massive than its near-twin Uranus. 
      Neptune is denser and physically smaller than 
      Uranus because its greater mass causes more gravitational compression of its atmosphere."
      display={isSceneRendered ? 'block' : 'none'}
    />
  );
};

export default Neptune;
