import type { LengthUnit } from './types';

class Length {
  private stdValue: number;

  constructor(value: number, unit: LengthUnit) {
    this.stdValue = Length.#parseToStd(value, unit);
  }

  mm() {
    return this.stdValue;
  }

  m() {
    return this.stdValue / 1000;
  }

  in() {
    return this.stdValue / 25.4;
  }

  ft() {
    return this.stdValue / 304.8;
  }

  set(value: number, unit: LengthUnit) {
    this.stdValue = Length.#parseToStd(value, unit);
  }

  static #parseToStd(value: number, unit: LengthUnit) {
    switch (unit) {
      case 'mm':
        return value;
      case 'm':
        return value * 1000;
      case 'in':
        return value * 25.4;
      case 'ft':
        return value * 304.8;
      default:
        throw new Error('Invalid unit');
    }
  }
}

export default Length;
