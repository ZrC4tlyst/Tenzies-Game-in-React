import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [newDie, setNewDie] = useState(allNewDice);

  function allNewDice() {
    const newDice = [];
    for (let i = 1; i < 11; i++) {
      let randomNumber = Math.ceil(Math.random() * 6);
      newDice.push({
        value: randomNumber,
        isHeld: true,
        id: nanoid(),
      });
    }
    console.log(newDice);
    return newDice;
  }

  function rollDice() {
    setNewDie(allNewDice());
  }
  function holdDice(id) {
    console.log(id);
    setNewDie((prevDie) => {
      return prevDie.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  const newDieFace = newDie.map((die) => (
    <Die
      key={die.id}
      diceValue={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
      id={die.id}
    />
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
