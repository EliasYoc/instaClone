import { HiDotsHorizontal } from "react-icons/hi";
import "./HeaderCard.css";
const HeaderCard = () => {
  return (
    <header className="card-head">
      <div className="card-head__avatar">
        <img src="https://placeimg.com/640/480/people" alt="" />
      </div>
      <div className="card-head__titles">
        <h5>Name</h5>
        <p>Location</p>
      </div>
      <button className="card-head__btn" aria-label="opciones">
        <HiDotsHorizontal />
      </button>
    </header>
  );
};

export default HeaderCard;
