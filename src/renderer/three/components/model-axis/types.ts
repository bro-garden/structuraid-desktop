import type { Vector2 } from 'three';

export interface ModelAxisOptions {
  label: string;
  direction: 'x' | 'y';
  startPosition: Vector2;
  endPosition: Vector2;
  containerEl: Element;
}
