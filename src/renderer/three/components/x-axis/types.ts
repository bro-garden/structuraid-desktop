import type { Camera } from 'three';

export interface XAxisOptions {
  camera: Camera;
  containerEl: Element;
  length?: number;
}

export interface XAxisUpdateOptions {
  camera: Camera;
}
