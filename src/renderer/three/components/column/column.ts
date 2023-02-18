// Author: Fyrestar https://mevedia.com (https://github.com/Fyrestar/THREE.InfiniteGridHelper)

import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import { ColumnOptions } from './types';

const Column = ({ width, height, coorX, coorY }: ColumnOptions) => {
  const geometry = new BoxGeometry(width, height, 0);
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  const square = new Mesh(geometry, material);
  square.position.set(coorX, coorY, 0);

  return square;
};
export default Column;
