import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'; 
import Projects from './components/Projects';  
import About from './components/About'; 
import Resume from './components/Resume'
import CovidApp from "./components/CovidApp"
import PartyHub from "./components/PartyHub"
import './App.css';
 
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
        <Route path="/CovidApp" component={CovidApp} />
        <Route path="/PartyHub" component={PartyHub} />
      </div>
    </Router>
  );
}
