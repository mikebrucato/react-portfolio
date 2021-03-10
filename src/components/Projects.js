import React from 'react';
import Thumbnail from './Thumbnail'; 
import '../App.css';


 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div class="thumbnails">
      <h1>Projects</h1>
      <Thumbnail
        link="/CovidApp"
        image="https://images.unsplash.com/photo-1613323441379-c09649e40376?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        title="Covid-19 Data Tracker"
        description=""
      />
      <Thumbnail
        link="/PartyHub"
        image="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhcnR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        title="Neighborhood Partyhub"
        description=""
      />
      <Thumbnail
        link="/DayPlanner"
        image="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        title="Day Planner"
        description=""
      />
      
    </div>
  )
}
 
export default Projects;