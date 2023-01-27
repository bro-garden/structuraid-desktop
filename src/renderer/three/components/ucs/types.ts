import type { Camera } from 'three';

export interface UCSOptions {
  camera: Camera;
  containerEl: Element;
  length?: number;
}

export interface UCSUpdateOptions {
  camera: Camera;
}
