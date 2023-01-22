import { useEffect } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
import invariant from 'tiny-invariant';

const ModellingUiPoc = () => {
  useEffect(() => {
    const containerEl = document.querySelector('.canvas-wrapper');
    invariant(containerEl, 'Could not find container tag');

    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      containerEl.clientWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new WebGLRenderer();
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(containerEl.clientWidth, window.innerHeight);
    containerEl.appendChild(renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;

    function animate() {
      window.requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <div className="p-20 min-h-screen">
      <h1 className="font-bold text-blue-500 text-6xl mb-6">
        Modelling UI PoC
      </h1>

      <div className="canvas-wrapper h-full" />
    </div>
  );
};

export default ModellingUiPoc;
