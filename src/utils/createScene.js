import * as THREE from 'three';

const createScene = (createPlanet, planetImage) => {
  const aspect = window.innerWidth / window.innerHeight;
  const canvas = document.querySelector('#webgl');
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
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  createPlanet(planetImage, scene, camera, renderer);
  //   window.addEventListener("resize", () => {
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   });
};

export default createScene;
