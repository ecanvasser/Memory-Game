import "../styles/Card.css";

const Card = (props) => {
  return (
    <button className="card-container" onClick={props.handleMove} name={props.name}>
      <div className="card-img"></div>
      <div className="card-name">{props.watches.name}</div>
    </button>
  );
};

export default Card;
