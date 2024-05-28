import "./App.css";
import Die from "./components/Die";

function App() {
  return (
    <>
      <main className="main">
        <h1>Tenzies</h1>
        <Die diceValue={1} />
      </main>
    </>
  );
}

export default App;
