import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'; 
import Projects from './components/Projects';  
import About from './components/About'; 
import Resume from './components/Resume'
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
      </div>
    </Router>
  );
}
