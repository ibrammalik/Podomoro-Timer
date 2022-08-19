import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1500);
  const [active, setActive] = useState(false);

  const timer = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const toggleActive = () => {
    active ? setActive(false) : setActive(true);
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
        <p>{count}</p>
        <button onClick={toggleActive}>START!</button>
      </header>
    </div>
  );
}

export default App;
