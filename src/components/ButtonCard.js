import "./ButtonCard.css";
const ButtonCard = ({ ariaLabel, amount, iconComponent: Icon }) => {
  return (
    <button className="card-btn" aria-label={ariaLabel}>
      <Icon />
      {amount && <p>{amount}</p>}
    </button>
  );
};

export default ButtonCard;
