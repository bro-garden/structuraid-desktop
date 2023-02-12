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
    const material = new MeshBasicMaterial({ color: COLORS.WHITE });

    const circle = new Mesh(geometry, material);
    return circle;
  }

  static #buildLabelObj(label: string, containerEl: Element) {
    const labelEl = document.createElement('div');
    labelEl.style.fontSize = '1rem';
    labelEl.style.color = COLORS.BLACK;
    labelEl.textContent = label;

    containerEl.appendChild(labelEl);

    const labelObject = new CSS3DObject(labelEl);
    labelObject.position.x = 0;
    labelObject.position.y = 0;
    labelObject.position.z = 0;

    return labelObject;
  }
}

export default ModelAxisLabel;
