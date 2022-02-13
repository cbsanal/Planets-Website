import useCustomUseEffect from '../hooks/useCustomUseEffect';
import PlanetPage from '../components/PlanetPage';
import haumea from '../images/haumea.jpg';
import { useState } from 'react';

const Haumea = () => {
  const [isSceneRendered, setIsSceneRendered] = useState(false);
  useCustomUseEffect(haumea, setIsSceneRendered);
  return (
    <PlanetPage
      planetName="Haumea"
      planetInfo="Haumea (minor-planet designation 136108 Haumea) is a dwarf planet located beyond Neptune's orbit. 
      It was discovered in 2004 by a team headed by Mike Brown of Caltech at the Palomar Observatory in the 
      United States and disputably also in 2005 by a team headed by José Luis Ortiz Moreno at the Sierra Nevada 
      Observatory in Spain, though the latter claim has been contested. On September 17, 2008, it was named after 
      Haumea, the Hawaiian goddess of childbirth, under the expectation by the International Astronomical Union (IAU) 
      that it would prove to be a dwarf planet."
      display={isSceneRendered ? 'block' : 'none'}
    />
  );
};

export default Haumea;
