// eslint-disable-next-line react/prop-types
const Die = ({ diceValue, isHeld, holdDice, id }) => {
  const styles = {
    background: isHeld ? "#59E391" : "#fff",
  };

  return (
    <>
      <div className="die" style={styles} onClick={holdDice}>
        <h2>{diceValue}</h2>
      </div>
    </>
  );
};
export default Die;
