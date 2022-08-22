import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./component/Timer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Timer</h1>
        <div className="Timer-container">
          <Timer />
        </div>
      </header>
    </div>
  );
}

export default App;
