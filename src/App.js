import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; 

import Projects from './components/Projects';  
import About from './components/About'; 
import Resume from './Resume'
import './App.css';
 
export default function App() {
   
    return (
    
     
          <Router>
            <div class="App">
          <About />
          <Projects />
          </div>
          </Router>

     
  
  );
}
