import Unit from '../unit';
import type { TimeUnit } from './types';

class Time extends Unit {
  constructor(value: number, unit: TimeUnit) {
    super(Time.#parseToStd(value, unit));
  }

  ms() {
    return this.stdValue * 1000;
  }

  s() {
    return this.stdValue;
  }

  set(value: number, unit: TimeUnit) {
    this.stdValue = Time.#parseToStd(value, unit);
  }

  static #parseToStd(value: number, unit: TimeUnit) {
    switch (unit) {
      case 'ms':
        return value / 1000;
      case 's':
        return value;
      default:
        throw new Error('Invalid unit');
    }
  }
}

export default Time;
