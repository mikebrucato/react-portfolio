import { Switch, Route, NavLink } from "react-router-dom"

import About from "./About"
import Projects from "./Projects" 
import Resume from "./Resume"

export default function Header() {
    return (
        <div className="header">
            
            <nav className="navbar">
                <NavLink className="navItem" to='/'>About </NavLink>
                <NavLink className="navItem" to='/projects'>Projects </NavLink>
                <NavLink className="navItem" to='/resume'>Resume </NavLink>
                <h3 className="name">Michael Brucato</h3>
            </nav>


            <Switch>
                <Route exact path ="/">
                    <About />
                </Route>
                <Route path ="/projects">
                    <Projects />
                </Route>
                <Route path ="/resume">
                    <Resume />
                </Route>
            </Switch>
        </div>
    )
}



