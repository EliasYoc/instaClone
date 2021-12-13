import { CgMenuLeft } from "react-icons/cg";
import { IoMailOutline } from "react-icons/io5";
import instaName from "../assets/img/instagram-wordmark.svg";
import "./HeaderHome.css";
const HeaderHome = () => {
  return (
    <header className="header header-home">
      <button className="header-home__btn" aria-label="menú">
        <CgMenuLeft />
      </button>
      <img className="header-home__img" src={instaName} alt="" />
      <button className="header-home__btn" aria-label="mensaje">
        <IoMailOutline />
      </button>
    </header>
  );
};

export default HeaderHome;
