import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [scores, setScores] = useState({ current: 0, best: 0 });
  const [watches, setWatches] = useState({
    datejust: { name: "Datejust", img: "", clicked: false },
  });

  return (
    <div className="App">
      <Header scores={scores} />
      <Main watches={watches} />
    </div>
  );
}

export default App;
