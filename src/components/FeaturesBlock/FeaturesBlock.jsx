function FeatureBlock(props) {
  return (
    <div className="items">
      <img src={props.image} alt="declarative" className="icon" />
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default FeatureBlock;
