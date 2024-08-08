import { create } from 'zustand';
import { createBoard } from './util';

type GameStore = {
  board: number[];
  matchedCards: number[];
  selectedCard: number | null;
  initialise: () => void;
  cardSelected: (idx: number) => void;
}

const useGameStore = create<GameStore>((set) => ({
  board: createBoard(),
  matchedCards: [],
  selectedCard: null,

  initialise: () => {
    set({ board: createBoard(), matchedCards: [], selectedCard: null });
  },

  cardSelected: (idx: number) => set(state => {
    if (state.selectedCard === null) {
      return ({
        selectedCard: idx,
      });
    } else if (state.selectedCard === idx) {
      return ({
        selectedCard: null,
      });
    } else {
      if (state.board[state.selectedCard] === state.board[idx] && state.selectedCard !== idx) {
        return ({
          selectedCard: null,
          matchedCards: [...state.matchedCards, state.board[idx]],
        });
      } else {
        return ({
          selectedCard: null,
        });
      }
    }
  }),

}));

export {
  useGameStore,
};
