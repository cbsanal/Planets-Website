import * as THREE from "three";
import earth from "../assets/images/earth.jpg";

const createEarth = (scene, camera, renderer) => {
  let earthMesh = null;
  const earthGeometry = new THREE.SphereBufferGeometry(0.6, 32, 32);
  const loader = new THREE.TextureLoader();
  loader.load(earth, (texture) => {
    const material = new THREE.MeshBasicMaterial({ map: texture });
    earthMesh = new THREE.Mesh(earthGeometry, material);
    scene.add(earthMesh);
  });
  const render = () => {
    renderer.render(scene, camera);
  };
  const animate = () => {
    requestAnimationFrame(animate);
    if (earthMesh) earthMesh.rotation.y -= 0.0015;
    render();
  };
  animate();
};

export default createEarth;
