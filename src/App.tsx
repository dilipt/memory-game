import { Card } from './Card';
import { useGameStore } from './gameStore'

function App() {
  const { board, initialise } = useGameStore();

  return (
    <main className="container flex items-center justify-center flex-col m-1 gap-4 p-4 border-blue-900 mx-auto">
      <h1 className="text-3xl">Test your memory</h1>
      <button onClick={() => initialise()} className="bg-blue-800 p-4 text-slate-200 rounded-md">New game</button>
      <section className="grid grid-cols-4 gap-2">
        {board.map((n, i) => <Card value={n} index={i} key={`${n}-${i}`} />)}
      </section>
    </main>
  );
}

export default App;
