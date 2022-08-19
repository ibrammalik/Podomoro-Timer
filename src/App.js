import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const defaultRemainingTime = 1500;
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const [active, setActive] = useState(false);

  const timer = () => {
    setRemainingTime((prevCount) => prevCount - 1);
  };

  const toggleActive = () => {
    if (active) {
      setActive(false);
      document.getElementById("mainButton").innerHTML = "START!";
    } else {
      setActive(true);
      document.getElementById("mainButton").innerHTML = "STOP!";
    }
  };

  const resetTimer = () => {
    document.getElementById("mainButton").click();
    setRemainingTime(defaultRemainingTime);
  };

  useEffect(() => {
    if (active) {
      const intervalTimer = setInterval(() => {
        timer();
      }, 1000);
      return () => clearTimeout(intervalTimer);
    } else return;
  }, [active]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Timer</p>
        <p>{remainingTime}</p>
        <button onClick={toggleActive} id="mainButton">
          START!
        </button>
        <button onClick={resetTimer} id="resetButton">
          RESET!
        </button>
      </header>
    </div>
  );
}

export default App;
