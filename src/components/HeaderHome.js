import { CgMenuLeft } from "react-icons/cg";
import { IoMoonOutline } from "react-icons/io5";
import instaName from "../assets/img/instagram-wordmark.svg";
import "./HeaderHome.css";
const HeaderHome = () => {
  const handleClickDarkMode = () => {
    const d = document;
    d.body.classList.toggle("dark");
    //show or hide theme
    const $darkDiv = d.querySelector("div.dark");
    $darkDiv.classList.toggle("hide");
    const $lightDiv = d.getElementById("remove-light");
    if (!$lightDiv.classList.contains("light")) {
      $lightDiv.classList.add("light");
    } else {
      setTimeout(() => {
        $lightDiv.classList.remove("light");
        console.log("timeout");
      }, 1000);
    }
  };
  return (
    <header className="header header-home">
      <button className="header-home__btn" aria-label="menú">
        <CgMenuLeft />
      </button>
      <img className="header-home__img" src={instaName} alt="" />
      <button
        onClick={handleClickDarkMode}
        className="header-home__btn"
        aria-label="mensaje"
      >
        <IoMoonOutline />
      </button>
    </header>
  );
};

export default HeaderHome;
