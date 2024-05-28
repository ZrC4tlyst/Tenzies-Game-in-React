import styles from "../cssModules/Die.module.css";

// eslint-disable-next-line react/prop-types
const Die = ({ diceValue }) => {
  return (
    <>
      <div className={`${styles.die}`}>
        <h2>{diceValue}</h2>
      </div>
    </>
  );
};
export default Die;
