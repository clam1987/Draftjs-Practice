import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import TextField from "../components/TextFieldDialog"
import DraftjsText from "../components/DraftjsTest"
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField />
        {/* <DraftjsText /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/announcements">
            Announcements
        </Link>
      </header>
    </div>
    // <>
    // <DraftjsText />
    // </>
  );
}

export default Home;
