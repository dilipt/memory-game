import { pairify, shuffle } from './index';

describe('util functions', () => {
  it('should shuffle an array', () => {
    const input = [1, 2, 3, 4];

    const output = shuffle(input);

    expect(output.every((n) => input.includes(n))).toEqual(true);
    expect(output).not.toEqual(input);
  });

  it('should create pairs of numbers', () => {
    const output = pairify(4);

    expect(output).toStrictEqual([1, 1, 2, 2, 3, 3, 4, 4]);
  });
});
