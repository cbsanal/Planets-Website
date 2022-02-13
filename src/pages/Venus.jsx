import useCustomUseEffect from '../hooks/useCustomUseEffect';
import PlanetPage from '../components/PlanetPage';
import venus from '../images/venus.jpg';
import { useState } from 'react';

const Venus = () => {
  const [isSceneRendered, setIsSceneRendered] = useState(false);
  useCustomUseEffect(venus, setIsSceneRendered);
  return (
    <PlanetPage
      planetName="Venus"
      planetInfo="Venus is the second planet from the Sun. It is named after the Roman goddess of 
      love and beauty. As the brightest natural object in Earth's night sky after the Moon, 
      Venus can cast shadows and can be visible to the naked eye in broad daylight. 
      Venus lies within Earth's orbit, and so never appears to venture far from the Sun."
      display={isSceneRendered ? 'block' : 'none'}
    />
  );
};

export default Venus;
