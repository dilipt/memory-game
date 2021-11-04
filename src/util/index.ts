function shuffle(list: number[]): number[] {
  const copy = [...list];
  for (let i = copy.length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (copy.length));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

function pairify(size: number = 8): number[] {
  const arr: number[] = [];
  for (let i = 1; i <= size; i += 1) {
    arr.push(i);
    arr.push(i);
  }
  return arr;
}

export function createBoard(size: number = 8): number[] {
  return shuffle(pairify(size));
}
