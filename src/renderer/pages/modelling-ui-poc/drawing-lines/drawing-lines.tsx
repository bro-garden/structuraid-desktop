// https://threejs.org/docs/index.html#manual/en/introduction/Drawing-lines

import { useEffect } from 'react';
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  LineBasicMaterial,
  Vector3,
  BufferGeometry,
  Line,
} from 'three';
import invariant from 'tiny-invariant';

const DrawingLines = () => {
  useEffect(() => {
    const containerEl = document.querySelector('.canvas-wrapper');
    invariant(containerEl, 'could not find container tag');

    const renderer = new WebGLRenderer();
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(containerEl.clientWidth, window.innerHeight);
    containerEl.appendChild(renderer.domElement);

    const camera = new PerspectiveCamera(
      45,
      containerEl.clientWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new Scene();

    const material = new LineBasicMaterial({ color: 0x0000ff });

    const points = [
      new Vector3(-10, 0, 0),
      new Vector3(0, 10, 0),
      new Vector3(10, 0, 0),
    ];
    const geometry = new BufferGeometry().setFromPoints(points);

    const line = new Line(geometry, material);

    scene.add(line);
    renderer.render(scene, camera);
  }, []);

  return (
    <div className="p-20 min-h-screen">
      <h1 className="font-bold text-blue-500 text-6xl mb-6">Drawing Lines</h1>

      <div className="canvas-wrapper h-full" />
    </div>
  );
};

export default DrawingLines;
