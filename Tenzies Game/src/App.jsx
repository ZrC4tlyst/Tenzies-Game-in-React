import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [newDie, setNewDie] = useState(allNewDice);

  function allNewDice() {
    const newDice = [];
    for (let i = 1; i < 11; i++) {
      let randomNumber = Math.ceil(Math.random() * 6);
      newDice.push({
        value: randomNumber,
        isHeld: false,
      });
    }
    return newDice;
  }

  function rollDice() {
    setNewDie(allNewDice());
  }

  const newDieFace = newDie.map((die) => (
    <Die key={Math.random()} diceValue={die.value} />
  ));

  return (
    <>
      <main className="main">
        <div className="die-container">{newDieFace}</div>
        <button onClick={rollDice}>Roll dice</button>
      </main>
    </>
  );
}

export default App;
