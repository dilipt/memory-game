import React from 'react';
import { useSelector } from 'react-redux';
import { Tile } from './Tile';
import { RootState } from './store/store';

export function Board() {
  const { board } = useSelector((state: RootState) => state.game);

  function renderRow(start: number, endExclusive: number) {
    return (
      <tr>
        {
          board.slice(start, endExclusive)
            .map((value) => (
              <td><Tile value={value} /></td>
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
