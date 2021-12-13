import { BsHeart } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { FiSend, FiBookmark } from "react-icons/fi";
import "./BodyCard.css";
import ButtonCard from "./ButtonCard";

const BodyCard = ({ img }) => {
  return (
    <article className="article-card">
      <img className="article-card__img" src={img} alt="" />
      <div className="article-card__btns">
        <div className="btns__left">
          <ButtonCard iconComponent={BsHeart} amount={12} ariaLabel="likes" />
          <ButtonCard
            iconComponent={AiOutlineMessage}
            amount={314}
            ariaLabel="comments"
          />
          <ButtonCard iconComponent={FiSend} ariaLabel="send" />
        </div>
        <ButtonCard iconComponent={FiBookmark} ariaLabel="save" />
      </div>
    </article>
  );
};

export default BodyCard;
