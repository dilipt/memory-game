function pairs(numberOfPairs: number): number[] {
  return new Array<number>(numberOfPairs).fill(0).flatMap((_, i) => [i + 1, i + 1]);
}

function shuffle(input: number[]): number[] {
  let len = input.length;
  while (len > 1) {
    len = len - 1;
    const rand = Math.floor(Math.random() * len);
    [input[rand], input[len]] = [input[len], input[rand]];
  }

  return input;
}

function createBoard(numberOfPairs: number = 8) {
  return shuffle(pairs(numberOfPairs));
}

export {
  pairs,
  shuffle,
  createBoard,
};
