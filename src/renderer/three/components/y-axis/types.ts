import type { Camera } from 'three';

export interface YAxisOptions {
  camera: Camera;
  containerEl: Element;
  length?: number;
}

export interface YAxisUpdateOptions {
  camera: Camera;
}
