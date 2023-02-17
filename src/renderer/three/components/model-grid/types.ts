export interface AxisDisposition {
  label: string;
  coordinate: number;
}

export interface ModelAxesDisposition {
  x: AxisDisposition[];
  y: AxisDisposition[];
}

export interface ModelGridOptions {
  disposition: ModelAxesDisposition;
  containerEl: Element;
}
