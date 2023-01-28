import { Vector3, BufferGeometry, Line, LineBasicMaterial, Group } from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { COLORS } from 'renderer/constants';

import type { Object3D, Camera } from 'three';
import type { XAxisOptions, XAxisUpdateOptions } from './types';

class XAxis {
  public length: number;

  public geometry: BufferGeometry;

  public material: LineBasicMaterial;

  public object3D: Object3D;

  public containerEl: Element;

  #line: Line;

  #label: CSS3DObject;

  constructor({ camera, containerEl, length = 10 }: XAxisOptions) {
    this.length = length;
    this.geometry = XAxis.#buildGeometry(length);
    this.material = XAxis.#buildMaterial();
    this.containerEl = containerEl;

    this.#line = this.#buildLine();
    this.#label = this.#buildLabel(camera);
    this.object3D = this.#build3DObject();
  }

  update({ camera }: XAxisUpdateOptions) {
    this.#label.lookAt(camera.position.x, camera.position.y, camera.position.z);
  }

  #buildLine() {
    const line = new Line(this.geometry, this.material);
    return line;
  }

  #buildLabel(camera: Camera) {
    const labelEl = document.createElement('div');
    labelEl.style.fontSize = '0.3rem';
    labelEl.style.color = COLORS.RED;
    labelEl.textContent = 'x';

    this.containerEl.appendChild(labelEl);

    const labelObject = new CSS3DObject(labelEl);
    labelObject.position.x = this.length + 2;
    labelObject.position.y = 0;
    labelObject.position.z = 0;

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
    const points = [new Vector3(0, 0, 0), new Vector3(length, 0, 0)];
    const geometry = new BufferGeometry().setFromPoints(points);

    return geometry;
  }

  static #buildMaterial() {
    return new LineBasicMaterial({ color: COLORS.RED });
  }
}

export default XAxis;
