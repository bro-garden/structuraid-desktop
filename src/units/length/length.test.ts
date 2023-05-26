import Length from '.';

describe('Length', () => {
  const length = new Length(100, 'm');

  describe('mm', () => {
    it('returns the length in milimeters', () => {
      expect(length.mm()).toBe(100000);
    });
  });

  describe('m', () => {
    it('returns the length in meters', () => {
      expect(length.m()).toBe(100);
    });
  });

  describe('in', () => {
    it('returns the length in inches', () => {
      expect(length.in().toFixed(2)).toBe('3937.01');
    });
  });

  describe('ft', () => {
    it('returns the length in feet', () => {
      expect(length.ft().toFixed(2)).toBe('328.08');
    });
  });

  describe('set', () => {
    it('updates the current value', () => {
      length.set(10, 'mm');
      expect(length.mm()).toBe(10);
    });
  });
});
