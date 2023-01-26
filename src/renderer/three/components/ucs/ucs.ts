import { Group } from 'three';
import { XAxis, YAxis, ZAxis } from 'renderer/three/components';

import type { Object3D } from 'three';
import type { UCSOptions } from './types';

class UCS {
  public xAxis: XAxis;

  public yAxis: YAxis;

  public zAxis: ZAxis;

  public length: number;

  public object3d: Object3D;

  constructor({ containerEl, length = 10 }: UCSOptions) {
    this.length = length;

    this.xAxis = new XAxis({ containerEl, length: this.length });
    this.yAxis = new YAxis({ containerEl, length: this.length });
    this.zAxis = new ZAxis({ containerEl, length: this.length });

    this.object3d = this.#buildGroup();
  }

  #buildGroup() {
    const group = new Group();
    group.add(this.xAxis.object3D);
    group.add(this.yAxis.object3D);
    group.add(this.zAxis.object3D);

    return group;
  }
}

export default UCS;
