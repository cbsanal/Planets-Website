import * as THREE from "three";

const createScene = (createPlanet, planetImage) => {
  const aspect = window.innerWidth / window.innerHeight;
  const canvas = document.querySelector("#webgl");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, aspect, 1, 1000);
  camera.position.z = 2;
  scene.add(camera);
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(5, 3, 5);
  scene.add(pointLight);
  createPlanet(planetImage, scene, camera, renderer);
};

export default createScene;
