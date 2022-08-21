import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Break from "./component/Break";
import ExtendedBreakTimer from "./component/ExtendedBreakTimer";
import Timer from "./component/Timer";
import TimerSwitchButton from "./component/TimerSwitchButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimerSwitchButton />
        <p>Timer</p>
        <div className="Timer-container">
          <Timer id="timer" />
          <Break />
          <ExtendedBreakTimer id="longBreak" />
        </div>
      </header>
    </div>
  );
}

export default App;
