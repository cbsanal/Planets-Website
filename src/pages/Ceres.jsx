import useCustomUseEffect from '../hooks/useCustomUseEffect';
import PlanetPage from '../components/PlanetPage';
import ceres from '../images/ceres.jpg';
import { useState } from 'react';

const Ceres = () => {
  const [isSceneRendered, setIsSceneRendered] = useState(false);
  useCustomUseEffect(ceres, setIsSceneRendered);
  return (
    <PlanetPage
      planetName="Ceres"
      planetInfo="Ceres is a dwarf planet in the asteroid belt between the orbits of Mars and Jupiter. 
      Ceres was the first asteroid discovered, on 1 January 1801 by Giuseppe Piazzi at Palermo Astronomical Observatory in Sicily. 
      Originally considered a planet, it was reclassified as an asteroid in the 1850s after the discovery of dozens of other objects in similar orbits.
      In 2006, it was reclassified again as a dwarf planet – the only one always inside Neptune's orbit – because, at 940 km (580 mi) in diameter, 
      it is the only asteroid large enough for its gravity to make it plastic and to maintain it as a spheroid."
      display={isSceneRendered ? 'block' : 'none'}
    />
  );
};

export default Ceres;
