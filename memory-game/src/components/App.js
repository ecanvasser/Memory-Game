import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [scores, setScores] = useState({ current: 0, best: 0 });

  return (
    <div className="App">
      <Header 
      scores={scores}
      />
      <Main />
    </div>
  );
}

export default App;
