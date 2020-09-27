import React from "react";
import "./App.css";
import KeypadComponent from "./components/KeypadComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  return (
    <div className="App">
      <p>Calculator</p>
      <ResultComponent result={"result"} />
      <KeypadComponent onClick={"onClick-keypad"} />
    </div>
  );
}

export default App;
