import { Group, Vector2 } from 'three';
import { ModelAxis } from 'renderer/three/components';
// import { LABEL_SIZE } from 'renderer/three/components/model-axis-label/model-axis-label';

import type { Object3D } from 'three';
import type { ModelAxesDisposition, ModelGridOptions } from './types';

const LABELS_PADDING = 10;

class ModelGrid {
  public object3D: Object3D;

  #xAxes: ModelAxis[];

  #yAxes: ModelAxis[];

  constructor({ disposition, containerEl }: ModelGridOptions) {
    this.#xAxes = ModelGrid.#buildXAxes(disposition, containerEl);
    this.#yAxes = ModelGrid.#buildYAxes(disposition, containerEl);

    this.object3D = this.#build3DObject();
  }

  #build3DObject() {
    const group = new Group();

    this.#xAxes.forEach((xAxis) => {
      group.add(xAxis.object3D);
    });

    this.#yAxes.forEach((yAxis) => {
      group.add(yAxis.object3D);
    });

    return group;
  }

  static #buildXAxes(disposition: ModelAxesDisposition, containerEl: Element) {
    const yCoordinates = disposition.y.map(
      (yDisposition) => yDisposition.coordinate
    );
    const yMinCoordinate = Math.min(...yCoordinates);
    const yMaxCoordinate = Math.max(...yCoordinates);

    const xAxes: ModelAxis[] = [];
    disposition.x.forEach((xDisposition) => {
      const axis = new ModelAxis({
        label: xDisposition.label,
        direction: 'x',
        startPosition: new Vector2(
          yMinCoordinate - LABELS_PADDING,
          xDisposition.coordinate
        ),
        endPosition: new Vector2(
          yMaxCoordinate + LABELS_PADDING,
          xDisposition.coordinate
        ),
        containerEl,
      });

      xAxes.push(axis);
    });

    return xAxes;
  }

  static #buildYAxes(disposition: ModelAxesDisposition, containerEl: Element) {
    const xCoordinates = disposition.x.map(
      (xDisposition) => xDisposition.coordinate
    );
    const xMinCoordinate = Math.min(...xCoordinates);
    const xMaxCoordinate = Math.max(...xCoordinates);

    const yAxes: ModelAxis[] = [];
    disposition.y.forEach((yDisposition) => {
      const axis = new ModelAxis({
        label: yDisposition.label,
        direction: 'y',
        startPosition: new Vector2(
          yDisposition.coordinate,
          xMinCoordinate - LABELS_PADDING
        ),
        endPosition: new Vector2(
          yDisposition.coordinate,
          xMaxCoordinate + LABELS_PADDING
        ),
        containerEl,
      });

      yAxes.push(axis);
    });

    return yAxes;
  }
}

export default ModelGrid;
