import { create } from "zustand";
import { createBoard } from "./util";

type GameStore = {
  board: number[];
  matchedCards: number[];
  selectedCards: number[];
  matchedPending: number[];
  initialise: () => void;
  cardSelected: (idx: number) => void;
};

const useGameStore = create<GameStore>((set) => ({
  board: createBoard(),
  matchedCards: [],
  selectedCards: [],
  matchedPending: [],

  initialise: () => {
    set({
      board: createBoard(),
      matchedCards: [],
      selectedCards: [],
      matchedPending: [],
    });
  },

  cardSelected: (selectedIdx: number) =>
    set((state) => {
      if (state.matchedCards.includes(state.board[selectedIdx])) {
        return state;
      }

      if (state.selectedCards.includes(selectedIdx)) {
        return state;
      }

      if (state.selectedCards.length === 0) {
        return {
          selectedCards: [selectedIdx],
        };
      }

      if (state.selectedCards.length === 1) {
        const firstSelection = state.board[state.selectedCards[0]];
        const secondSelection = state.board[selectedIdx];

        if (firstSelection === secondSelection) {
          const matchedValue = state.board[selectedIdx];

          setTimeout(() => {
            set((currentState) => ({
              matchedCards: [...currentState.matchedCards, matchedValue],
              matchedPending: currentState.matchedPending.filter(
                (value) => value !== matchedValue,
              ),
            }));
          }, 600);

          return {
            selectedCards: [],
            matchedPending: [...state.matchedPending, matchedValue],
          };
        }

        const nextSelected = [...state.selectedCards, selectedIdx];

        setTimeout(() => {
          set((currentState) => ({
            selectedCards: currentState.selectedCards.filter(
              (selectedIdx) => !nextSelected.includes(selectedIdx),
            ),
          }));
        }, 600);

        return {
          selectedCards: nextSelected,
        };
      }

      return state;
    }),
}));

export { useGameStore };
