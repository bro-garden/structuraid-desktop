import type { Camera } from 'three';

export interface ZAxisOptions {
  camera: Camera;
  containerEl: Element;
  length?: number;
}

export interface ZAxisUpdateOptions {
  camera: Camera;
}
