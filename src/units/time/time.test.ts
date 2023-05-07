import Time from '.';

describe('Time', () => {
  const time = new Time(100, 's');

  describe('ms', () => {
    it('returns the time in miliseconds', () => {
      expect(time.ms()).toBe(100000);
    });
  });

  describe('s', () => {
    it('returns the time in seconds', () => {
      expect(time.s()).toBe(100);
    });
  });

  describe('set', () => {
    it('updates the current value', () => {
      time.set(10, 'ms');
      expect(time.s()).toBe(0.01);
    });
  });
});
