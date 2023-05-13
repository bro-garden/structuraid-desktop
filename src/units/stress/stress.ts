import Unit from '../unit';
import type { StressUnit } from './types';

class Stress extends Unit {
  constructor(value: number, unit: StressUnit) {
    super(Stress.#parseToStd(value, unit));
  }

  MPa() {
    return this.stdValue;
  }

  kPa() {
    return this.stdValue * 1000;
  }

  kgf_cm2() {
    return this.stdValue * 10.19716213;
  }

  psi() {
    return this.stdValue * 145.0377377;
  }

  ksi() {
    return this.stdValue * 0.145037738;
  }

  set(value: number, unit: StressUnit) {
    this.stdValue = Stress.#parseToStd(value, unit);
  }

  static #parseToStd(value: number, unit: StressUnit) {
    switch (unit) {
      case 'MPa':
        return value;
      case 'kPa':
        return value / 1000;
      case 'kgf_cm2':
        return value / 10.19716213;
      case 'psi':
        return value / 145.0377377;
      case 'ksi':
        return value / 0.145037738;
      default:
        throw new Error('Invalid unit');
    }
  }
}

export default Stress;
