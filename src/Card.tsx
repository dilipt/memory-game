import styles from "./Card.module.css";
import { useGameStore } from "./gameStore";

type CardProps = {
  value: number;
  index: number;
};

function Card({ value, index }: CardProps) {
  const cardSelected = useGameStore((state) => state.cardSelected);
  const selectedCards = useGameStore((state) => state.selectedCards);
  const matchedCards = useGameStore((state) => state.matchedCards);
  const matchedPending = useGameStore((state) => state.matchedPending);

  const isMatched = matchedCards.includes(value);
  const isPendingMatch = matchedPending.includes(value);
  const isRemoved = isMatched || isPendingMatch;
  const isFlipped =
    selectedCards.includes(index) || isMatched || isPendingMatch;

  function toggleSelected() {
    if (!isRemoved) {
      cardSelected(index);
    }
  }

  return (
    <div
      onClick={toggleSelected}
      className={`${styles.card} ${isFlipped ? styles.flipped : ""} ${isMatched ? styles.removed : ""}`}
      aria-label={isFlipped ? `Card value ${value}` : "Hidden card"}
    >
      <div className={styles.inner}>
        <div className={`${styles.face} ${styles.front}`}>?</div>
        <div className={`${styles.face} ${styles.back}`}>
          {isFlipped ? value : ""}
        </div>
      </div>
    </div>
  );
}

export { Card };
