import { useRef, useEffect, useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [scores, setScores] = useState({ current: 0, best: 0 });
  const [watches, setWatches] = useState({
    Datejust: { name: "Datejust", img: "", clicked: false },
    Oyster: { name: "Oyster", img: "", clicked: false },
  });
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setScores((prevScores) => ({
      ...prevScores,
      current: scores.current++,
      best: scores.best++,
    }));
  }, [...Object.values(watches).map((obj) => obj.clicked)]);

  const handleMove = (e) => {
    let watch = watches[e.target.name];

    if (watch.clicked === false) {
      setWatches((prevWatches) => ({
        ...prevWatches,
        [e.target.name]: {
          ...prevWatches[e.target.name],
          clicked: true,
        },
      }));
    }
  };

  return (
    <div className="App">
      <Header scores={scores} />
      <Main watches={watches} handleMove={handleMove} />
    </div>
  );
}

export default App;
