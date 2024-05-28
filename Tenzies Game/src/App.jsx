import "./App.css";
import Die from "./components/Die";

function App() {
  return (
    <>
      <main className="main">
        <div className="die-container">
          <Die diceValue={1} />
          <Die diceValue={2} />
          <Die diceValue={3} />
          <Die diceValue={4} />
          <Die diceValue={5} />
          <Die diceValue={6} />
          <Die diceValue={1} />
          <Die diceValue={2} />
          <Die diceValue={3} />
          <Die diceValue={4} />
        </div>
      </main>
    </>
  );
}

export default App;
