import { useEffect, useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [newDie, setNewDie] = useState(allNewDice);
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allDiceHeld = newDie.every((die) => die.isHeld);
    const firstValue = newDie[0].value;
    const allSameValue = newDie.every((die) => die.value === firstValue);
    if (allDiceHeld && allSameValue) {
      setTenzies(true);
      console.log("you won");
    }
  }, [newDie]);

  function generateNewDice() {
    let randomNumber = Math.ceil(Math.random() * 6);
    return {
      value: randomNumber,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 1; i < 11; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setNewDie((prevDie) => {
        return prevDie.map((die) => {
          return die.isHeld ? die : generateNewDice();
        });
      });
    } else {
      setTenzies(false);
      setNewDie(allNewDice);
    }
  }

  function holdDice(id) {
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
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <button onClick={rollDice}>{tenzies ? "New Game" : "Roll Dice"}</button>
        {tenzies && <Confetti />}
      </main>
    </>
  );
}

export default App;
