import styles from "../cssModules/Die.module.css";

const Die = ({ diceValue }) => {
  return (
    <>
      <div className={`${styles.die}`}>
        <h3>{diceValue}</h3>
      </div>
    </>
  );
};
export default Die;
