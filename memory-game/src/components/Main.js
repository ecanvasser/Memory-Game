import "../styles/Main.css";
import Card from "./Card";

const Main = (props) => {
  return (
  <main>
    {Object.values(props.watches).map((obj) => {
      return <Card watches={obj} />
    })}
  </main>
  );
};

export default Main;
