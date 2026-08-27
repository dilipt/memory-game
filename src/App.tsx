import styles from './App.module.css';
import { Card } from './Card';
import { useGameStore } from './gameStore';

function App() {
  const { board, initialise } = useGameStore();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Test your memory</h1>
      <button onClick={() => initialise()} className={styles.button}>
        New game
      </button>
      <section className={styles.board}>
        {board.map((n, i) => (
          <Card value={n} index={i} key={`${n}-${i}`} />
        ))}
      </section>
    </main>
  );
}

export default App;
