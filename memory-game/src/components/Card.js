import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-img"></div>
      <div className="card-name">{props.watches.name}</div>
    </div>
  );
};

export default Card;
