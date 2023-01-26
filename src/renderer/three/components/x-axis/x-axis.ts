import { Vector3, BufferGeometry, Line, LineBasicMaterial, Group } from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { COLORS } from 'renderer/constants';

import type { Object3D } from 'three';
import type { XAxisOptions } from './types';

class XAxis {
  public length: number;

  public geometry: BufferGeometry;

  public material: LineBasicMaterial;

  public object3D: Object3D;

  public containerEl: Element;

  constructor({ containerEl, length = 10 }: XAxisOptions) {
    this.length = length;
    this.geometry = XAxis.#buildGeometry(length);
    this.material = XAxis.#buildMaterial();
    this.containerEl = containerEl;

    this.object3D = this.#build3DObject();
  }

  #build3DObject() {
    const group = new Group();
    const line = new Line(this.geometry, this.material);
    group.add(line);

    const labelEl = document.createElement('div');
    labelEl.textContent = 'X';
    this.containerEl.appendChild(labelEl);
    const labelObject = new CSS3DObject(labelEl);
    labelObject.position.x = this.length;
    labelObject.position.y = 0;
    labelObject.position.z = 0;

    group.add(labelObject);

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
