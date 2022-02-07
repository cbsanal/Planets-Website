import * as THREE from "three";

const createPlanet = (planetImage, scene, camera, renderer) => {
  let planetMesh = null;
  const planetGeometry = new THREE.SphereBufferGeometry(0.6, 32, 32);
  const loader = new THREE.TextureLoader();
  loader.load(planetImage, (texture) => {
    const material = new THREE.MeshBasicMaterial({ map: texture });
    planetMesh = new THREE.Mesh(planetGeometry, material);
    scene.add(planetMesh);
  });
  const render = () => {
    renderer.render(scene, camera);
  };
  const animate = () => {
    requestAnimationFrame(animate);
    if (planetMesh) planetMesh.rotation.y -= 0.0015;
    render();
  };
  animate();
};

export default createPlanet;
