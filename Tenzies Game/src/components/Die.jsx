import styles from "../cssModules/Die.module.css";

const Die = ({ diceValue }) => {
  return (
    <>
      <div className={`${styles["dice-container"]}`}>
        <div className={`${styles.die}`}>{diceValue}</div>
        <div className={`${styles.die}`}>{diceValue}</div>
        <div className={`${styles.die}`}>{diceValue}</div>
        <div className={`${styles.die}`}>{diceValue}</div>
        <div className={`${styles.die}`}>{diceValue}</div>
        <div className={`${styles.die}`}>{diceValue}</div>
        <div className={`${styles.die}`}>{diceValue}</div>
        <div className={`${styles.die}`}>{diceValue}</div>
        <div className={`${styles.die}`}>{diceValue}</div>
        <div className={`${styles.die}`}>{diceValue}</div>
      </div>
    </>
  );
};
export default Die;
