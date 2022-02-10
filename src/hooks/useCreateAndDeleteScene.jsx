import { useEffect } from 'react';
import { createScene, createPlanet } from '../utils';

const useCreateAndDeleteScene = (planet) => {
  useEffect(() => {
    const clear = setTimeout(() => {
      localStorage.clear();
      createScene(createPlanet, planet);
    }, 200);
    return () => {
      clearTimeout(clear);
      localStorage.setItem('clear', true);
    };
  }, [planet]);
};

export default useCreateAndDeleteScene;
