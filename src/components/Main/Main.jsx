import logo from "../../images/ironhack-logo-xs.png";
import menuBtn from "../../images/menu-top-xs.png";
import Button from "../Button/Button.jsx";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="center">
        <div className="menu">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="menu-btn">
            <img src={menuBtn} alt="menu button" />
          </div>
        </div>

        <div className="hero">
          <div>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </p>
            <Button text="Awesome!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
