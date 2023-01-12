import "../styles/Header.css";
import {FaBrain} from 'react-icons/fa';
import { IconContext } from "react-icons";

const Header = (props) => {
  return (
    <header>
      <div id="header-title">Memory Game</div>
      <IconContext.Provider value={{size: '30px'}}>
        <FaBrain />
      </IconContext.Provider>
      <div id="header-scores">
        <div id="current-score">Score: {props.scores.current}</div>
        <div id="best-score">Best Score: {props.scores.best}</div>
      </div>
    </header>
  );
};

export default Header;
