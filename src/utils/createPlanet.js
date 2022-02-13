import * as THREE from 'three';

const createPlanet = async (planetImage, scene, camera, renderer, setIsSceneRendered) => {
  const planetGeometry = new THREE.SphereBufferGeometry(0.6, 32, 32);
  const texture = await new THREE.TextureLoader().loadAsync(planetImage);
  let material = new THREE.MeshBasicMaterial({ map: texture });
  let planetMesh = new THREE.Mesh(planetGeometry, material);
  scene.add(planetMesh);
  const render = () => {
    renderer.render(scene, camera);
  };
  const animate = () => {
    if (localStorage.getItem('clear')) {
      while (scene.children.length > 0) scene.remove(scene.children[0]);
      texture.dispose();
      material.dispose();
      planetGeometry.dispose();
      renderer.dispose();
      planetMesh = undefined;
      return null;
    }
    if (planetMesh) planetMesh.rotation.y -= 0.0015;
    requestAnimationFrame(animate);
    render();
  };
  animate();
  setIsSceneRendered(true);
};

export default createPlanet;
