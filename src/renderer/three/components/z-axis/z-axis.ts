import { Vector3, BufferGeometry, Line, LineBasicMaterial, Group } from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { COLORS } from 'renderer/constants';

import type { Object3D, Camera } from 'three';
import type { ZAxisOptions, ZAxisUpdateOptions } from './types';

class ZAxis {
  public length: number;

  public geometry: BufferGeometry;

  public material: LineBasicMaterial;

  public object3D: Object3D;

  public containerEl: Element;

  #line: Line;

  #label: CSS3DObject;

  constructor({ camera, containerEl, length = 10 }: ZAxisOptions) {
    this.length = length;
    this.geometry = ZAxis.#buildGeometry(length);
    this.material = ZAxis.#buildMaterial();
    this.containerEl = containerEl;

    this.#line = this.#buildLine();
    this.#label = this.#buildLabel(camera);

    this.object3D = this.#build3DObject();
  }

  update({ camera }: ZAxisUpdateOptions) {
    this.#label.lookAt(camera.position.x, camera.position.y, camera.position.z);
  }

  #buildLine() {
    const line = new Line(this.geometry, this.material);
    return line;
  }

  #buildLabel(camera: Camera) {
    const labelEl = document.createElement('div');
    labelEl.style.fontSize = '0.3rem';
    labelEl.style.color = COLORS.BLUE;
    labelEl.textContent = 'z';

    this.containerEl.appendChild(labelEl);

    const labelObject = new CSS3DObject(labelEl);
    labelObject.position.x = 0;
    labelObject.position.y = 0;
    labelObject.position.z = this.length + 2;

    labelObject.lookAt(camera.position.x, camera.position.y, camera.position.z);

    return labelObject;
  }

  #build3DObject() {
    const group = new Group();

    group.add(this.#line);
    group.add(this.#label);

    return group;
  }

  static #buildGeometry(length: number) {
    const points = [new Vector3(0, 0, 0), new Vector3(0, 0, length)];
    const geometry = new BufferGeometry().setFromPoints(points);

    return geometry;
  }

  static #buildMaterial() {
    return new LineBasicMaterial({ color: COLORS.BLUE });
  }
}

export default ZAxis;
