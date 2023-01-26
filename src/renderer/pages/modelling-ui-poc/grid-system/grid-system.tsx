import { useEffect } from 'react';
import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import invariant from 'tiny-invariant';
import { UCS } from 'renderer/three/components';

const GridSystem = () => {
  useEffect(() => {
    const containerEl = document.querySelector('.canvas-wrapper');
    invariant(containerEl, 'could not find container tag');

    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(containerEl.clientWidth, window.innerHeight);

    containerEl.appendChild(renderer.domElement);

    const camera = new PerspectiveCamera(
      45,
      containerEl.clientWidth / window.innerHeight,
      0.001,
      1000
    );

    const controls = new OrbitControls(camera, renderer.domElement);

    camera.position.set(100, 100, 100);
    camera.lookAt(0, 0, 0);
    controls.update();

    const scene = new Scene();
    const ucs = new UCS({
      containerEl,
    });

    scene.add(ucs.object3d);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <div className="p-20 min-h-screen">
      <h1 className="font-bold text-blue-500 text-6xl mb-6">Grid System</h1>

      <div className="canvas-wrapper h-full" />
    </div>
  );
};

export default GridSystem;
