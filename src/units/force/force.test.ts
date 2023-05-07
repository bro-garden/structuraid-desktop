import Force from '.';

describe('Force', () => {
  const force = new Force(100, 'kN');

  describe('kgf', () => {
    it('returns the force in kilogram-force', () => {
      expect(force.kgf().toFixed(2)).toBe('10196.80');
    });
  });

  describe('tonf', () => {
    it('returns the force in ton-force', () => {
      expect(force.tonf().toFixed(2)).toBe('10.20');
    });
  });

  describe('lbf', () => {
    it('returns the force in pound-force', () => {
      expect(force.lbf().toFixed(2)).toBe('22482.01');
    });
  });

  describe('kip', () => {
    it('returns the force in kip', () => {
      expect(force.kip().toFixed(2)).toBe('22.48');
    });
  });

  describe('N', () => {
    it('returns the force in newton', () => {
      expect(force.N().toFixed(2)).toBe('100000.00');
    });
  });

  describe('kN', () => {
    it('returns the force in kilonewton', () => {
      expect(force.kN().toFixed(2)).toBe('100.00');
    });
  });

  describe('MN', () => {
    it('returns the force in meganewton', () => {
      expect(force.MN().toFixed(2)).toBe('0.10');
    });
  });

  describe('set', () => {
    it('updates the current value', () => {
      force.set(100, 'MN');
      expect(force.N()).toBe(100000000);
    });
  });
});
