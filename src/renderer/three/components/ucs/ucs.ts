import { Group } from 'three';
import { XAxis, YAxis, ZAxis } from 'renderer/three/components';

import type { Object3D } from 'three';
import type { UCSOptions, UCSUpdateOptions } from './types';

class UCS {
  public xAxis: XAxis;

  public yAxis: YAxis;

  public zAxis: ZAxis;

  public length: number;

  public object3d: Object3D;

  constructor({ camera, containerEl, length = 10 }: UCSOptions) {
    this.length = length;

    this.xAxis = new XAxis({ camera, containerEl, length: this.length });
    this.yAxis = new YAxis({ camera, containerEl, length: this.length });
    this.zAxis = new ZAxis({ camera, containerEl, length: this.length });

    this.object3d = this.#buildGroup();
  }

  update({ camera }: UCSUpdateOptions) {
    this.xAxis.update({ camera });
    this.yAxis.update({ camera });
    this.zAxis.update({ camera });
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
