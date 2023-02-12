import { CircleGeometry, Mesh, MeshBasicMaterial, Group } from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { COLORS } from 'renderer/constants';

import type { Object3D } from 'three';
import type { ModelAxisLabelOptions } from './types';

const CIRCLE_RADIUS = 10;
const CIRCLE_SEGMENTS = 32;

class ModelAxisLabel {
  public label: string;

  public object3D: Object3D;

  #circle: Mesh;

  #labelObj: CSS3DObject;

  constructor({ label, containerEl }: ModelAxisLabelOptions) {
    this.label = label;

    this.#circle = ModelAxisLabel.#buildCircle();
    this.#labelObj = ModelAxisLabel.#buildLabelObj(this.label, containerEl);
    this.object3D = this.#build3DObject();
  }

  // update({ camera }: ModelAxisLabelUpdateOptions) {}

  #build3DObject() {
    const group = new Group();

    group.add(this.#circle);
    group.add(this.#labelObj);

    return group;
  }

  static #buildCircle() {
    const geometry = new CircleGeometry(CIRCLE_RADIUS, CIRCLE_SEGMENTS);
    const material = new MeshBasicMaterial({ color: COLORS.GRAY2 });

    const circle = new Mesh(geometry, material);

    circle.position.set(10, 10, 0);

    return circle;
  }

  static #buildLabelObj(label: string, containerEl: Element) {
    const labelEl = document.createElement('div');
    labelEl.style.fontSize = '1rem';
    labelEl.style.color = COLORS.BLACK;
    labelEl.textContent = label;

    containerEl.appendChild(labelEl);

    const labelObject = new CSS3DObject(labelEl);

    labelObject.position.set(10, 10, 0);

    return labelObject;
  }
}

export default ModelAxisLabel;
