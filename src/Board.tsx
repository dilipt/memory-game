import React, { useEffect, useState } from 'react';
import { Tile } from './Tile';
import { createBoard } from './util';

const MATCH_COUNT = 8;

export function Board() {
  const [gameState, setGameState] = useState<number[]>(createBoard(MATCH_COUNT));
  const [selectedTiles, setSelectedTiles] = useState<Array<number>>([]);

  const selectHandler = (value: number) => {
    if (selectedTiles.length === 2) {
      setSelectedTiles([]);
    } else {
      setSelectedTiles([...selectedTiles, value]);
    }
  };

  useEffect(() => {
    if (selectedTiles.length === 2) {
      if (selectedTiles[0] === selectedTiles[1]) {
        setGameState((oldState) => oldState.map((value) => (value === selectedTiles[0] ? 0 : value)));
      }
    }
  }, [selectedTiles]);

  function renderRow(start: number, endExclusive: number) {
    return (
      <tr>
        {
          gameState.slice(start, endExclusive)
            .map((value) => (
              <td><Tile value={value} selectHandler={selectHandler} selectCount={selectedTiles.length} /></td>
            ))
        }
      </tr>
    );
  }

  return (
    <table>
      <thead />
      <tbody>
        {renderRow(0, 4)}
        {renderRow(4, 8)}
        {renderRow(8, 12)}
        {renderRow(12, 16)}
      </tbody>
    </table>
  );
}
