import { CircleGeometry, Mesh, MeshBasicMaterial, Group } from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { COLORS } from 'renderer/constants';

import type { Object3D, Vector2 } from 'three';
import type { ModelAxisLabelOptions } from './types';

export const LABEL_SIZE = 5;
const LABEL_FONT_SIZE = '0.25rem';
const CIRCLE_SEGMENTS = 32;

class ModelAxisLabel {
  public label: string;

  public position: Vector2;

  public object3D: Object3D;

  #circle: Mesh;

  #labelObj: CSS3DObject;

  constructor({ label, position, containerEl }: ModelAxisLabelOptions) {
    this.label = label;
    this.position = position;

    this.#circle = ModelAxisLabel.#buildCircle(this.position);
    this.#labelObj = ModelAxisLabel.#buildLabelObj(
      this.label,
      this.position,
      containerEl
    );
    this.object3D = this.#build3DObject();
  }

  #build3DObject() {
    const group = new Group();

    group.add(this.#circle);
    group.add(this.#labelObj);

    return group;
  }

  static #buildCircle(position: Vector2) {
    const geometry = new CircleGeometry(LABEL_SIZE / 2, CIRCLE_SEGMENTS);
    const material = new MeshBasicMaterial({ color: COLORS.GRAY_SOFT });

    const circle = new Mesh(geometry, material);

    circle.position.set(position.x, position.y, 0);

    return circle;
  }

  static #buildLabelObj(
    label: string,
    position: Vector2,
    containerEl: Element
  ) {
    const labelEl = document.createElement('div');
    labelEl.style.fontSize = LABEL_FONT_SIZE;
    labelEl.style.color = COLORS.PRIMARY;
    labelEl.textContent = label;

    containerEl.appendChild(labelEl);

    const labelObject = new CSS3DObject(labelEl);

    labelObject.position.set(position.x, position.y, 0);

    return labelObject;
  }
}

export default ModelAxisLabel;
