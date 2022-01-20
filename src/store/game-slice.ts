import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createBoard } from '../util';

const MATCH_COUNT = 8;

type SelectionState = 'NONE_SELECTED' | 'ONE_SELECTED' | 'TWO_SELECTED';

export type GameState = {
  selectedTile: number,
  board: number[],
  matchedNumbers: number[],
  selectionState: SelectionState,
  hideAll: boolean,
}

const initialGameState: GameState = {
  selectionState: 'NONE_SELECTED',
  board: createBoard(MATCH_COUNT),
  matchedNumbers: [],
  selectedTile: 0,
  hideAll: true,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    tileSelected(state, action: PayloadAction<{ tile: number }>) {
      if (state.selectionState === 'NONE_SELECTED') {
        return {
          ...state,
          selectionState: 'ONE_SELECTED',
          selectedTile: action.payload.tile,
          hideAll: false,
        };
      }
      if (state.selectionState === 'ONE_SELECTED') {
        return {
          ...state,
          matchedNumbers: state.selectedTile === action.payload.tile ? [...state.matchedNumbers, action.payload.tile] : state.matchedNumbers,
          selectedTile: 0,
          selectionState: 'NONE_SELECTED',
          hideAll: true,
        };
      }
      return {
        ...state,
        selectionState: 'NONE_SELECTED',
      };
    },
  },
});

export const { tileSelected } = gameSlice.actions;
export default gameSlice.reducer;
