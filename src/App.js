import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Timer from "./component/Timer";
import NavbarComponent from "./component/NavbarComponent";
import Settings from "./component/Settings";
import Tasks from "./component/Tasks";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  const [temporaryPodomoro, setTemporaryPodomoro] = React.useState(25);
  const [temporaryBreak, setTemporaryBreak] = React.useState(5);
  const [temporaryLongBreak, setTemporaryLongBreak] = React.useState(15);

  const [podomoroTime, setPodomoroTime] = React.useState(25);
  const [breakTime, setBreakTime] = React.useState(5);
  const [longBreakTime, setLongBreakTime] = React.useState(15);

  const [tasksActive, setTasksActive] = React.useState(false);

  const [inputTodo, setInputTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const saveInput = () => {
    setModalShow(false);
    setPodomoroTime(temporaryPodomoro);
    setBreakTime(temporaryBreak);
    setLongBreakTime(temporaryLongBreak);
  };

  const onHide = () => {
    setModalShow(false);
    setTemporaryPodomoro(podomoroTime);
    setTemporaryBreak(breakTime);
    setTemporaryLongBreak(longBreakTime);
  };

  const reset = () => {
    setTemporaryPodomoro(25);
    setTemporaryBreak(5);
    setTemporaryLongBreak(15);
    setPodomoroTime(25);
    setBreakTime(5);
    setLongBreakTime(15);
  };

  return (
    <div className="App">
      <NavbarComponent handleClick={() => setModalShow(true)} setTasksActive={setTasksActive} />
      <Settings
        show={modalShow}
        onHide={onHide}
        onSave={saveInput}
        reset={reset}
        podomorovalue={temporaryPodomoro}
        breakvalue={temporaryBreak}
        longbreakvalue={temporaryLongBreak}
        handlechangepodomoro={(event) => setTemporaryPodomoro(event.target.value)}
        handlechangebreak={(event) => setTemporaryBreak(event.target.value)}
        handlechangelongbreak={(event) => setTemporaryLongBreak(event.target.value)}
      />
      <header className="App-header">
        <Timer podomorotime={podomoroTime} breaktime={breakTime} longbreaktime={longBreakTime} />
      </header>
      <Tasks inputTodo={inputTodo} setInputTodo={setInputTodo} todos={todos} setTodos={setTodos} tasksActive={tasksActive} setTasksActive={setTasksActive} />
    </div>
  );
}

export default App;
