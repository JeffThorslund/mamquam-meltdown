import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { timing } from "./_utils/parseRecords";

function App() {
  const normalStarts = [
    { racerId: "1", time: 1 },
    { racerId: "2", time: 3 },
  ];
  const normalEnds = [{ racerId: "2", time: 4 }];

  const expected = {
    "1": [
      {
        endTime: null,
        startTime: 1,
      },
    ],
    "2": [
      {
        endTime: 4,
        startTime: 3,
      },
    ],
  };

  const results = timing(normalStarts, normalEnds);

  console.log(results);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
