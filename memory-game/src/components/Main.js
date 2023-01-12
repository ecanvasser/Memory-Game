import "../styles/Main.css";
import Card from "./Card";

const Main = (props) => {
  return (
  <main>
    {Object.values(props.random).map((obj) => {
      return <Card watches={obj} handleMove={props.handleMove} name={obj.name} src={obj.img}/>
    })}
  </main>
  );
};

export default Main;
