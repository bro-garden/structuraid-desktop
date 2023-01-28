// https://threejs.org/docs/index.html#examples/en/geometries/TextGeometry

import { useEffect } from 'react';
import {
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
} from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import invariant from 'tiny-invariant';

const ProceduralText = () => {
  useEffect(() => {
    const containerEl = document.querySelector('.canvas-wrapper');
    invariant(containerEl, 'could not find container tag');

    const renderer = new WebGLRenderer();
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(containerEl.clientWidth, window.innerHeight);
    containerEl.appendChild(renderer.domElement);

    const camera = new PerspectiveCamera(
      75,
      containerEl.clientWidth / window.innerHeight,
      0.01,
      10000
    );
    camera.position.set(400, 400, 700);
    camera.lookAt(0, 0, 0);

    const scene = new Scene();

    const loader = new FontLoader();
    loader.load(
      'https://unpkg.com/three@latest/examples/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const geometry = new TextGeometry('Hello three.js!', {
          font,
          size: 80,
          height: 10,
        });

        const material = new MeshBasicMaterial({ color: 0x00ff00 });
        const mesh = new Mesh(geometry, material);

        geometry.computeBoundingBox();
        invariant(geometry.boundingBox, 'boundingBox is not defined');
        const { max, min } = geometry.boundingBox;

        const centerOffset = -0.5 * (max.x - min.x);

        mesh.position.x = centerOffset;
        mesh.position.y = 0;
        mesh.position.z = 0;

        scene.add(mesh);

        renderer.render(scene, camera);
      }
    );
  }, []);

  return (
    <div className="p-20 min-h-screen">
      <h1 className="font-bold text-blue-500 text-6xl mb-6">Procedural Text</h1>

      <div className="canvas-wrapper h-full" />
    </div>
  );
};

export default ProceduralText;
