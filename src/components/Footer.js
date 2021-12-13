import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";
import { BsPatchPlus, BsHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Link className="footer__btn" to="/">
          <GrHomeRounded />
        </Link>
        <Link className="footer__btn" to="/search">
          <RiSearchLine />
        </Link>
        <div className=" sqr-btn">
          <Link className="footer__btn" to="/new">
            <BsPatchPlus />
          </Link>
        </div>
        <Link className="footer__btn" to="/notifications">
          <BsHeart />
        </Link>
        <Link className="footer__btn" to="/profile">
          <AiOutlineUser />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
