import Unit from '../unit';
import type { ForceUnit } from './types';

class Force extends Unit {
  constructor(value: number, unit: ForceUnit) {
    super(Force.#parseToStd(value, unit));
  }

  N() {
    return this.stdValue;
  }

  kN() {
    return this.stdValue / 1000;
  }

  lbf() {
    return this.stdValue / 4.448;
  }

  kip() {
    return this.stdValue / 4448.222;
  }

  kgf() {
    return this.stdValue / 9.807;
  }

  MN() {
    return this.stdValue / 1000000;
  }

  tonf() {
    return this.stdValue / 9807;
  }

  set(value: number, unit: ForceUnit) {
    this.stdValue = Force.#parseToStd(value, unit);
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
