import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home"
import Announcements from "./pages/AllAnnouncements";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/announcements" component={Announcements} />
    </Router>
  );
}

export default App;
