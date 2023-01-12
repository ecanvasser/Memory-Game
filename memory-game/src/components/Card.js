import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img className="card-img" alt="" onClick={props.handleMove} name={props.name} src={props.src} />
      <div className="card-name">{props.watches.name}</div>
    </div>
  );
};

export default Card;
