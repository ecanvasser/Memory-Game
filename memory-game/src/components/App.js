import { useRef, useEffect, useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [target, setTarget] = useState("Explorer");
  const [scores, setScores] = useState({ current: 0, best: 0 });
  const [watches, setWatches] = useState({
    Datejust: {
      name: "Datejust",
      img: require("../images/datejust.jpeg"),
      clicked: false,
    },
    Submariner: {
      name: "Submariner",
      img: require("../images/submariner.webp"),
      clicked: false,
    },
    Explorer: {
      name: "Explorer",
      img: require("../images/explorer.jpeg"),
      clicked: false,
    },
    Milgauss: {
      name: "Milgauss",
      img: require("../images/milgauss.jpeg"),
      clicked: false,
    },
    Cellini: {
      name: "Cellini",
      img: require("../images/cellini.webp"),
      clicked: false,
    },
    "Oyster Perpetual": {
      name: "Oyster Perpetual",
      img: require("../images/oyster.webp"),
      clicked: false,
    },
    "Air-King": {
      name: "Air-King",
      img: require("../images/airking.webp"),
      clicked: false,
    },
    "GMT-Master II": {
      name: "GMT-Master II",
      img: require("../images/gmt.jpeg"),
      clicked: false,
    },
    "Yacht-Master": {
      name: "Yacht-Master",
      img: require("../images/yachtmaster.webp"),
      clicked: false,
    },
    "Cosmograph-Daytona": {
      name: "Cosmograph-Daytona",
      img: require("../images/cosmo.webp"),
      clicked: false,
    },
    "Sea-Dweller": {
      name: "Sea-Dweller",
      img: require("../images/seadweller.jpeg"),
      clicked: false,
    },
    "Day-Date": {
      name: "Day-Date",
      img: require("../images/daydate.webp"),
      clicked: false,
    },
  });
  const randomObj= useRef(watches);
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
        best:
          scores.best > scores.current ? scores.best : prevScores.current + 1,
      }));
    }
  }, [...Object.values(watches).map((obj) => obj.clicked)]);

  // Creates randomization after each card selection
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (watches[target].clicked === true) {
      let randArr = [];
      let watchValues = Object.values(watches);
      let length = watchValues.length;

      for (let i = 0; i < length; i++) {
        let index = Math.ceil(Math.random() * watchValues.length - 1);
        randArr.push(watchValues[index]);
        watchValues.splice(index, 1);
      }
      let randObj = randArr.reduce((a, v) => {
        let name = v.name;
        return {
          ...a,
          [name]: v,
        };
      }, {});
      randomObj.current = randObj
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
      setWatches(baseState);
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
      <Main watches={watches} random={randomObj.current} handleMove={handleMove} />
    </div>
  );
}

export default App;
