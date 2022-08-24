import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./component/Timer";
import NavbarComponent from "./component/NavbarComponent";
import Settings from "./component/Settings";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  const [podomoroTime, setPodomoroTime] = React.useState(25);
  const [breakTime, setBreakTime] = React.useState(5);
  const [longBreakTime, setLongBreakTime] = React.useState(15);

  return (
    <div className="App">
      <NavbarComponent handleClick={() => setModalShow(true)} />
      <Settings
        show={modalShow}
        onHide={() => setModalShow(false)}
        podomorovalue={podomoroTime}
        breakvalue={breakTime}
        longbreakvalue={longBreakTime}
        handlechangepodomoro={(event) => setPodomoroTime(event.target.value)}
        handlechangebreak={(event) => setBreakTime(event.target.value)}
        handlechangelongbreak={(event) => setLongBreakTime(event.target.value)}
      />
      <header className="App-header">
        <h1>Timer</h1>
        <Timer podomorotime={podomoroTime} breaktime={breakTime} longbreaktime={longBreakTime} />
      </header>
    </div>
  );
}

export default App;
