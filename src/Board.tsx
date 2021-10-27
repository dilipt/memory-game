import React from 'react';

type BoardProps = {
  board: number[][],
};

export function Board({ board }: BoardProps) {
  return (
    <div>
      {
        board.map((row, idx) => (<span key={row[idx]}>{JSON.stringify(row)}</span>))
      }
    </div>
  );
}
