import { useCallback, useEffect, useState } from 'react';
import { useGameStore } from './gameStore';

type CardProps = {
  value: number;
  index: number;
};

type CardState = "default" | "selected" | "removed";

const cardStyles: Record<CardState, string> = {
  default: 'flex items-center justify-center border border-solid border-purple-500 p-4 cursor-pointer rounded-md hover:bg-purple-200 text-purple-500',
  selected: 'flex items-center justify-center border border-solid border-purple-500 p-4 cursor-pointer rounded-md hover:bg-purple-200 bg-purple-200 text-purple-500',
  removed: 'flex items-center justify-center border border-dashed border-gray-300 rounded-md p-4 text-gray-400',
}

function Card({ value, index }: CardProps) {
  const cardSelected = useGameStore((state) => state.cardSelected);
  const selectedCard = useGameStore((state) => state.selectedCard);
  const matchedCards = useGameStore((state) => state.matchedCards);

  const getCardState = useCallback(() => {
    if (matchedCards.includes(value)) {
      return "removed";
    } else if (selectedCard === index) {
      return "selected";
    }
    return "default";
  }, [matchedCards, selectedCard, index, value]);
  
  const [cardState, setCardState] = useState<CardState>(getCardState());

  useEffect(() => {
    const set = setTimeout(() => setCardState(getCardState()), 1000);
    return () => clearTimeout(set);
  }, [selectedCard, getCardState])

  function toggleSelected() {
    if (cardState !== "removed") {
      if (cardState === "default") {
        setCardState("selected");
      } else if (cardState === "selected") {
        setCardState("default");
      }
      cardSelected(index);
    }
  }

  return (
    (<div onClick={toggleSelected} className={cardStyles[cardState]}>
      {cardState === "selected" ? value : "+"}
    </div>)
  );
}

export {
  Card,
};
