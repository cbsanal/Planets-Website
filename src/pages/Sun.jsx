import useCreateAndDeleteScene from '../hooks/useCreateAndDeleteScene';
import PlanetPage from '../components/PlanetPage';
import sun from '../images/sun.jpg';

const Sun = () => {
  useCreateAndDeleteScene(sun);
  return (
    <PlanetPage
      planetName="Sun"
      planetInfo="The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma,
       heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light, 
       ultraviolet light, and infrared radiation. It is by far the most important source of energy for life on Earth. 
       Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth. Its mass is about 330,000 times 
       that of Earth, and it accounts for about 99.86% of the total mass of the Solar System."
    />
  );
};

export default Sun;
