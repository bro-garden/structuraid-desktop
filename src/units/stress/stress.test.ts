import Stress from '.';

describe('Stress', () => {
  const stress = new Stress(100, 'kPa');

  describe('MPa', () => {
    it('returns the stress in megapascals', () => {
      expect(stress.MPa()).toBe(0.1);
    });
  });

  describe('kPa', () => {
    it('returns the stress in kilopascals', () => {
      expect(stress.kPa()).toBe(100);
    });
  });

  describe('kgf_cm2', () => {
    it('returns the stress in kilograms-force per square centimeter', () => {
      expect(stress.kgf_cm2().toFixed(2)).toBe('1.02');
    });
  });

  describe('psi', () => {
    it('returns the stress in pounds-force per square inch', () => {
      expect(stress.psi().toFixed(2)).toBe('14.50');
    });
  });

  describe('ksi', () => {
    it('returns the stress in kilopounds-force per square inch', () => {
      expect(stress.ksi().toFixed(4)).toBe('0.0145');
    });
  });
});
