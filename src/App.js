import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./component/Timer";
import NavbarComponent from "./component/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <header className="App-header">
        <h1>Timer</h1>
        <Timer />
      </header>
    </div>
  );
}

export default App;
