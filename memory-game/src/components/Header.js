import "../styles/Header.css";

const Header = (props) => {
  return (
    <header>
      <div id="header-title">Memory Game</div>
      <div id="header-scores">
        <div id="current-score">Score: {props.scores.current}</div>
        <div id="best-score">Best Score: {props.scores.best}</div>
      </div>
    </header>
  );
};

export default Header;
