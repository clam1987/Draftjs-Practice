import React from 'react';
import logo from './logo.svg';
import TextField from "./components/TextFieldDialog"
import DraftjsText from "./components/DraftjsTest"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField />
        {/* <DraftjsText /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    // <>
    // <DraftjsText />
    // </>
  );
}

export default App;
