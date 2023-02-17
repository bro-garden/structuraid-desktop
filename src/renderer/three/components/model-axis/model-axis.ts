import { Line, LineBasicMaterial, BufferGeometry, Group, Vector2 } from 'three';
import { COLORS } from 'renderer/constants';
import { ModelAxisLabel } from 'renderer/three/components';
import { LABEL_SIZE } from 'renderer/three/components/model-axis-label/model-axis-label';

import type { Object3D } from 'three';
import type { ModelAxisOptions } from './types';

class ModelAxis {
  public object3D: Object3D;

  #startAxisLabel: ModelAxisLabel;

  #endAxisLabel: ModelAxisLabel;

  #line: Line;

  constructor({
    label,
    direction,
    startPosition,
    endPosition,
    containerEl,
  }: ModelAxisOptions) {
    this.#startAxisLabel = ModelAxis.#buildStartLabel(
      label,
      direction,
      startPosition,
      containerEl
    );
    this.#endAxisLabel = ModelAxis.#buildEndLabel(
      label,
      direction,
      endPosition,
      containerEl
    );
    this.#line = ModelAxis.#buildLine(startPosition, endPosition);

    this.object3D = this.#build3DObject();
  }

  // update({ camera }: ModelAxisUpdateOptions) {}

  #build3DObject() {
    const group = new Group();

    group.add(this.#startAxisLabel.object3D);
    group.add(this.#endAxisLabel.object3D);
    group.add(this.#line);

    return group;
  }

  static #buildStartLabel(
    label: string,
    direction: 'x' | 'y',
    position: Vector2,
    containerEl: Element
  ) {
    const labelPosition = new Vector2(position.x, position.y);
    if (direction === 'x') {
      labelPosition.x -= LABEL_SIZE / 2;
    } else if (direction === 'y') {
      labelPosition.y -= LABEL_SIZE / 2;
    }

    const labelObj = new ModelAxisLabel({
      label,
      position: labelPosition,
      containerEl,
    });

    return labelObj;
  }

  static #buildEndLabel(
    label: string,
    direction: 'x' | 'y',
    position: Vector2,
    containerEl: Element
  ) {
    const labelPosition = new Vector2(position.x, position.y);
    if (direction === 'x') {
      labelPosition.x += LABEL_SIZE / 2;
    } else if (direction === 'y') {
      labelPosition.y += LABEL_SIZE / 2;
    }

    const labelObj = new ModelAxisLabel({
      label,
      position: labelPosition,
      containerEl,
    });

    return labelObj;
  }

  static #buildLine(startPosition: Vector2, endPosition: Vector2) {
    const geometry = new BufferGeometry().setFromPoints([
      startPosition,
      endPosition,
    ]);
    const material = new LineBasicMaterial({ color: COLORS.GRAY40 });

    const line = new Line(geometry, material);
    return line;
  }
}

export default ModelAxis;
