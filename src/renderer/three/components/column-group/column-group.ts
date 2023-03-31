// Author: Fyrestar https://mevedia.com (https://github.com/Fyrestar/THREE.InfiniteGridHelper)

import { Group } from 'three';
import Column from '../column';
import { ColumnGroupOptions } from './types';

const ColumnsGroup = ({ columns }: ColumnGroupOptions) => {
  const group = new Group();

  columns.forEach(({ ...props }) => {
    const col = Column({ ...props });
    group.add(col);
  });

  return group;
};
export default ColumnsGroup;
