import unicornFun from '../src';

describe('Main', () => {
  it('should throw an TypeError', () => {
    expect(() => unicornFun(123)).toThrowError(TypeError);
    expect(() => unicornFun(123)).toThrowError(/expected a string, got number/i);
  });

  it('should return the `unicorn & rainbows`', () => {
    expect(unicornFun('unicorn')).toBe('unicorn & rainbows');
  });
});
