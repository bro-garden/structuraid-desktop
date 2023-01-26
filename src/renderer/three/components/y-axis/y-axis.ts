import { Vector3, BufferGeometry, Line, LineBasicMaterial } from 'three';
import { COLORS } from 'renderer/constants';

import type { Object3D } from 'three';
import type { YAxisOptions } from './types';

class YAxis {
  public length: number;

  public geometry: BufferGeometry;

  public material: LineBasicMaterial;

  public object3D: Object3D;

  constructor({ containerEl, length = 10 }: YAxisOptions) {
    this.length = length;
    this.geometry = YAxis.#buildGeometry(length);
    this.material = YAxis.#buildMaterial();

    this.object3D = new Line(this.geometry, this.material);
  }

  static #buildGeometry(length: number) {
    const points = [new Vector3(0, 0, 0), new Vector3(0, length, 0)];
    const geometry = new BufferGeometry().setFromPoints(points);

    return geometry;
  }

  static #buildMaterial() {
    return new LineBasicMaterial({ color: COLORS.GREEN });
  }
}

export default YAxis;
