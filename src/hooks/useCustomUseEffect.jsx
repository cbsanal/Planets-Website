import { useEffect } from 'react';
import { createScene } from '../utils';

const useCustomUseEffect = (planet, setIsSceneRendered) => {
  useEffect(() => {
    const clear = setTimeout(() => {
      localStorage.clear();
      createScene(planet, setIsSceneRendered);
      //giving time for animate function to enter cleaning if statement
    }, 100);
    return () => {
      clearTimeout(clear);
      localStorage.setItem('clear', true);
    };
  }, [planet, setIsSceneRendered]);
};

export default useCustomUseEffect;
