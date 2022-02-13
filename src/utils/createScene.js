import * as THREE from 'three';
import { createPlanet } from '.';

const createScene = (planetImage, setIsSceneRendered) => {
  const aspect = (window.innerWidth * 6.5) / 10 / window.innerHeight;
  const canvas = document.querySelector('#webgl');
  canvas.style.position = 'absolute';
  canvas.style.right = '0';
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, aspect, 1, 1000);
  camera.position.z = 2;
  scene.add(camera);
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    autoClear: true,
  });
  renderer.setSize((window.innerWidth * 6.5) / 10, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  createPlanet(planetImage, scene, camera, renderer, setIsSceneRendered);
};

export default createScene;
