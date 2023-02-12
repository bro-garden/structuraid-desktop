import { useEffect } from 'react';
import {
  WebGLRenderer,
  OrthographicCamera,
  Scene,
  Color,
  Vector2,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import invariant from 'tiny-invariant';
import { InfiniteGrid, ModelAxis } from 'renderer/three/components';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { COLORS } from 'renderer/constants';

const Columns2D = () => {
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

    const camera = new OrthographicCamera(
      -webglContainerEl.clientWidth / 2,
      webglContainerEl.clientWidth / 2,
      webglContainerEl.clientHeight / 2,
      -webglContainerEl.clientHeight / 2,
      0.1,
      1000
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    const cssControls = new OrbitControls(camera, cssRenderer.domElement);

    controls.enableRotate = false;
    cssControls.enableRotate = false;

    camera.position.set(0, 0, 10);
    controls.update();
    cssControls.update();

    const scene = new Scene();
    scene.background = new Color(COLORS.BLACK);

    const grid = new InfiniteGrid({
      spacingX: 10,
      spacingY: 10,
      color: new Color(COLORS.DARK),
      distance: 2000,
    });

    grid.position.set(0, 0, -0.0001); // little tweak to make sure the grid stays behind all objects

    scene.add(grid);

    const axisLabelX = new ModelAxis({
      label: 'A',
      direction: 'x',
      startPosition: new Vector2(10, 10),
      endPosition: new Vector2(200, 10),
      containerEl: cssContainerEl,
    });

    scene.add(axisLabelX.object3D);

    const axisLabelY = new ModelAxis({
      label: '1',
      direction: 'y',
      startPosition: new Vector2(20, 0),
      endPosition: new Vector2(20, 200),
      containerEl: cssContainerEl,
    });

    scene.add(axisLabelY.object3D);

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
      <h1 className="font-bold text-blue-500 text-6xl mb-6">2D Columns</h1>

      <div className="canvas-wrapper h-screen relative">
        <div className="css-wrapper w-full h-screen absolute left-0 top-0 z-10" />
        <div className="webgl-wrapper w-full h-screen absolute left-0 top-0 z-0" />
      </div>
    </div>
  );
};

export default Columns2D;
