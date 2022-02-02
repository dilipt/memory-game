export function shuffle(list: number[]): number[] {
  const copy = [...list];
  for (let i = copy.length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (copy.length));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pairify(size: number = 8): number[] {
  return new Array(size)
    .fill(0)
    .flatMap((_, i) => [i + 1, i + 1]);
}

export function createBoard(size: number = 8): number[] {
  return shuffle(pairify(size));
}
