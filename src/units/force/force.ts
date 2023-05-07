import type { ForceUnit } from './types';

class Force {
  private stdUnit: number;

  constructor(value: number, unit: ForceUnit) {
    this.stdUnit = Force.#parseToStd(value, unit);
  }

  N() {
    return this.stdUnit;
  }

  kN() {
    return this.stdUnit / 1000;
  }

  lbf() {
    return this.stdUnit / 4.448;
  }

  kip() {
    return this.stdUnit / 4448.222;
  }

  kgf() {
    return this.stdUnit / 9.807;
  }

  MN() {
    return this.stdUnit / 1000000;
  }

  tonf() {
    return this.stdUnit / 9807;
  }

  set(value: number, unit: ForceUnit) {
    this.stdUnit = Force.#parseToStd(value, unit);
  }

  static #parseToStd(value: number, unit: ForceUnit) {
    switch (unit) {
      case 'N':
        return value;
      case 'kN':
        return value * 1000;
      case 'lbf':
        return value * 4.448;
      case 'kip':
        return value * 4448.222;
      case 'kgf':
        return value * 9.807;
      case 'MN':
        return value * 1000000;
      case 'tonf':
        return value * 9807;
      default:
        throw new Error('Invalid unit');
    }
  }
}

export default Force;
