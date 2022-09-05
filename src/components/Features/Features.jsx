import declarativeIcon from "../../images/icon1.png";
import componentsIcon from "../../images/icon2.png";
import singleWayItem from "../../images/icon3.png";
import jsxItem from "../../images/icon4.png";
import "./Feature.css";

function Features() {
  return (
    <div className="features">
      <div className="center">
        <div className="items">
          <img src={declarativeIcon} alt="declarative" className="icon" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="items">
          <img src={componentsIcon} alt="declarative" className="icon" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="items">
          <img src={singleWayItem} alt="declarative" className="icon" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="items">
          <img src={jsxItem} alt="declarative" className="icon" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
