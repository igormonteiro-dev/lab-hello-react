import declarativeIcon from "../../images/icon1.png";
import componentsIcon from "../../images/icon2.png";
import singleWayItem from "../../images/icon3.png";
import jsxItem from "../../images/icon4.png";
import FeatureBlock from "../FeaturesBlock/FeaturesBlock";
import "./Feature.css";

function Features() {
  return (
    <div className="features">
      <div className="center">
        <FeatureBlock
          image={declarativeIcon}
          title="Declarative"
          paragraph="React makes it painless to create interactive UIs."
        />

        <FeatureBlock
          image={componentsIcon}
          title="Components"
          paragraph="Build encapsulated components that manage their state."
        />

        <FeatureBlock
          image={singleWayItem}
          title="Single-Way"
          paragraph="A set of immutable values are passed to the component's."
        />

        <FeatureBlock
          image={jsxItem}
          title="JSX"
          paragraph="Statically-typed, designed to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default Features;
