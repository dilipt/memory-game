import { describe, it, expect } from 'vitest';
import { pairs, shuffle } from './';

describe('create board', () => {
  it('should create a basic board', () => {
    const board = pairs(4);
    expect(board).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);

    const shuffled = shuffle([...board]);
    expect(shuffled).not.toEqual(board);
  });
});
