import "./App.css";
import Break from "./component/Break";
import Timer from "./component/Timer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Timer</p>
        <div className="Timer-container">
          <Timer />
          <Break />
        </div>
      </header>
    </div>
  );
}

export default App;
