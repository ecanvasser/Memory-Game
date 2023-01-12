import { useRef, useEffect, useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [target, setTarget] = useState("Oyster");
  const [scores, setScores] = useState({ current: 0, best: 0 });
  const [watches, setWatches] = useState({
    Datejust: { name: "Datejust", img: "", clicked: false },
    Oyster: { name: "Oyster", img: "", clicked: false },
  });
  const [baseState, setBaseState] = useState(watches);
  const firstUpdate = useRef(true);

  // Handles scoring increase and best score
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (watches[target].clicked === true) {
      setScores((prevScores) => ({
        ...prevScores,
        current: prevScores.current + 1,
        best: scores.best > scores.current ? scores.best : prevScores.current + 1
      }));
    }
  }, [...Object.values(watches).map((obj) => obj.clicked)]);

  // Resets current score when card is selected twice
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (watches[target].clicked === false) {
      setScores((prevScores) => ({
        ...prevScores,
        current: 0,
      }));
      setWatches(baseState)
    }
  }, [...Object.values(watches).map((obj) => obj.clicked)]);

  const handleMove = (e) => {
    let watch = watches[e.target.name];
    setTarget(e.target.name);

    if (watch.clicked === false) {
      setWatches((prevWatches) => ({
        ...prevWatches,
        [e.target.name]: {
          ...prevWatches[e.target.name],
          clicked: true,
        },
      }));
    } else if (watch.clicked === true) {
      setWatches((prevWatches) => ({
        ...prevWatches,
        [e.target.name]: {
          ...prevWatches[e.target.name],
          clicked: false,
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
