import useCustomUseEffect from '../hooks/useCustomUseEffect';
import PlanetPage from '../components/PlanetPage';
import { useState } from 'react';
import mars from '../images/mars.jpg';

const Mars = () => {
  const [isSceneRendered, setIsSceneRendered] = useState(false);
  useCustomUseEffect(mars, setIsSceneRendered);
  return (
    <PlanetPage
      planetName="Mars"
      planetInfo='Mars is the fourth planet from the Sun and the second-smallest planet in
      the Solar System, being larger than only Mercury. In English, Mars
      carries the name of the Roman god of war and is often referred to as the
      "Red Planet".'
      display={isSceneRendered ? 'block' : 'none'}
    />
  );
};

export default Mars;
