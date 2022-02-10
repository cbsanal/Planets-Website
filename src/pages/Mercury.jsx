import useCreateAndDeleteScene from '../hooks/useCreateAndDeleteScene';
import PlanetPage from '../components/PlanetPage';
import mercury from '../images/mercury.jpg';

const Mercury = () => {
  useCreateAndDeleteScene(mercury);
  return (
    <PlanetPage
      planetName="Mercury"
      planetInfo="Mercury is the smallest planet in the Solar System and the closest to the Sun. 
      Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. 
      It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, 
      corresponding to the Greek god Hermes (Ἑρμῆς). Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, 
      and its apparent distance from the Sun as viewed from Earth never exceeds 28°."
    />
  );
};

export default Mercury;
