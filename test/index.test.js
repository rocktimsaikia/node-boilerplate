import add from '../src';

describe('Main', () => {
  it('should throw an TypeError', () => {
    expect(() => add('2', 2)).toThrowError(TypeError);
    expect(() => add('2', 2)).toThrowError(/expected type number, got string/i);
  });

  it('should return the 4', async () => {
    expect(add(2, 2)).toBe(4);
  });
});
