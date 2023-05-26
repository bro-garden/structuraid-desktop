import Unit from '.';

describe('Unit', () => {
  const something = new Unit(100);

  describe('valueOf', () => {
    it('returns the stdValue', () => {
      expect(something.valueOf()).toBe(100);
    });

    it('enables arithmetic operations', () => {
      expect(+something + 100).toBe(200);
    });
  });
});
