import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Projects from './components/Projects';  
import About from './components/About'; 
import CovidApp from "./components/CovidApp"
import PartyHub from "./components/PartyHub"
import DayPlanner from "./components/DayPlanner"
import './App.css';
 
export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/CovidApp" component={CovidApp} />
        <Route path="/PartyHub" component={PartyHub} />
        <Route path="/DayPlanner" component={DayPlanner} />
      </div>
    </Router>
  );
}
