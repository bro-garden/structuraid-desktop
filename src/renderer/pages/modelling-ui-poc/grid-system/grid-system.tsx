import { useEffect } from 'react';
import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import invariant from 'tiny-invariant';
import { UCS } from 'renderer/three/components';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer';

const GridSystem = () => {
  useEffect(() => {
    const webglContainerEl = document.querySelector('.webgl-wrapper');
    invariant(webglContainerEl, 'could not find container tag');

    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(
      webglContainerEl.clientWidth,
      webglContainerEl.clientHeight
    );

    webglContainerEl.appendChild(renderer.domElement);

    const cssContainerEl = document.querySelector('.css-wrapper');
    invariant(cssContainerEl, 'could not find container tag');

    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(
      cssContainerEl.clientWidth,
      cssContainerEl.clientHeight
    );

    cssContainerEl.appendChild(cssRenderer.domElement);

    const camera = new PerspectiveCamera(
      45,
      webglContainerEl.clientWidth / webglContainerEl.clientHeight,
      0.001,
      1000
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    const cssControls = new OrbitControls(camera, cssRenderer.domElement);

    camera.position.set(100, 100, 100);
    camera.lookAt(0, 0, 0);
    controls.update();
    cssControls.update();

    const scene = new Scene();
    const ucs = new UCS({
      containerEl: cssContainerEl,
    });

    scene.add(ucs.object3d);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      cssControls.update();
      cssRenderer.render(scene, camera);
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <div className="p-20 min-h-screen">
      <h1 className="font-bold text-blue-500 text-6xl mb-6">Grid System</h1>

      <div className="canvas-wrapper h-screen relative">
        <div className="css-wrapper w-full h-screen absolute left-0 top-0" />
        <div className="webgl-wrapper w-full h-screen absolute left-0 top-0" />
      </div>
    </div>
  );
};

export default GridSystem;
