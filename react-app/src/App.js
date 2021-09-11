import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/home";
import Map from "./pages/map";
import Report from "./pages/report";
import Guidelines from "./pages/guidelines";
import Incidents from "./pages/incidents";
import Support from "./pages/support";
import Contact from "./pages/contact";

import Navbar from "./pages/components/navbar";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/guidelines">
              <Guidelines />
            </Route>
            <Route path="/incidents">
              <Incidents />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
