import { useEffect } from 'react';
import {
  WebGLRenderer,
  OrthographicCamera,
  Scene,
  Color,
  Vector2,
  Raycaster,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import invariant from 'tiny-invariant';
import {
  InfiniteGrid,
  ModelGrid,
  ColumnsGroup,
} from 'renderer/three/components';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { COLORS } from 'renderer/constants';

const ColumnGroup = () => {
  useEffect(() => {
    const scene = new Scene();
    const webglContainerEl = document.querySelector('.webgl-wrapper');
    invariant(webglContainerEl, 'could not find container tag');
    const camera = new OrthographicCamera(
      -webglContainerEl.clientWidth / 2,
      webglContainerEl.clientWidth / 2,
      webglContainerEl.clientHeight / 2,
      -webglContainerEl.clientHeight / 2,
      0.1,
      1000
    );
    const mouse = new Vector2();
    const raycaster = new Raycaster();

    function hoverPointer() {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      for (let i = 0; i < intersects.length; i += 1) {
        const intObject = intersects[i].object as any;
        if (intObject.name === 'column') {
          intObject.material.color?.set(COLORS.NOTICE_SOFT_yellow);
        }
      }
    }

    function onPointerMove(event: any) {
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      if (!webglContainerEl) return null;
      const clientRects = webglContainerEl.getBoundingClientRect();
      const myCoordx = event.clientX - clientRects.x;
      const myCoordy = event.clientY - clientRects.y;
      mouse.x = (myCoordx / clientRects.width) * 2 - 1;
      mouse.y = -(myCoordy / clientRects.height) * 2 + 1;
      hoverPointer();
      return null;
    }

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

    const controls = new OrbitControls(camera, renderer.domElement);
    const cssControls = new OrbitControls(camera, cssRenderer.domElement);

    controls.enableRotate = false;
    cssControls.enableRotate = false;

    camera.position.set(0, 0, 10);
    controls.update();
    cssControls.update();

    scene.background = new Color(COLORS.GRAY_DARK);

    const grid = new InfiniteGrid({
      spacingX: 10,
      spacingY: 10,
      color: new Color(COLORS.GRAY_SOFT),
      distance: 2000,
    });

    grid.position.set(0, 0, -0.0001); // little tweak to make sure the grid stays behind all objects

    // scene.add(grid);

    const modelGrid = new ModelGrid({
      disposition: {
        x: [
          {
            label: 'A',

            coordinate: 0,
          },
          {
            label: 'B',
            coordinate: 12.5,
          },
          {
            label: 'C',
            coordinate: 17.5,
          },
        ],
        y: [
          {
            label: '1',
            coordinate: 0,
          },
          {
            label: '2',
            coordinate: 7.5,
          },
          {
            label: '3',
            coordinate: 15,
          },
        ],
      },
      containerEl: cssContainerEl,
    });

    const columns = [
      {
        width: 2,
        height: 2,
        coorX: 15,
        coorY: 17.5,
        color: COLORS.NOTICE_SOFT_yellow,
      },
      {
        width: 2,
        height: 2,
        coorX: 0,
        coorY: 5,
        color: COLORS.NOTICE_RED,
      },
      {
        width: 1,
        height: 3,
        coorX: 0,
        coorY: 10,
        color: COLORS.NOTICE_RED,
      },
      {
        width: 2,
        height: 4,
        coorX: 5,
        coorY: 0,
        color: COLORS.NOTICE_RED,
      },
      {
        width: 2,
        height: 1,
        coorX: 10,
        coorY: 0,
        color: COLORS.NOTICE_RED,
      },
    ];
    scene.add(modelGrid.object3D);
    const columnGroup = ColumnsGroup({ columns });
    scene.add(columnGroup);

    window.addEventListener('click', onPointerMove, false);
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      // cssControls.update();
      // cssRenderer.render(scene, camera);
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <div className="p-20 min-h-screen">
      <h1 className="font-bold text-blue-500 text-6xl mb-6">column Group</h1>

      <div className="canvas-wrapper h-screen relative">
        <div className="css-wrapper w-full h-screen absolute left-0 top-0 z-10" />
        <div className="webgl-wrapper w-full h-screen absolute left-0 top-0 z-0" />
      </div>
    </div>
  );
};

export default ColumnGroup;
