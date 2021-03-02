import React from 'react';
import Thumbnail from './Thumbnail.js'; 
import '../App.css';
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div class="thumbnails">
      <h1>Projects</h1>
      <Thumbnail
        link=""
        image=""
        title="Covid-19 Data Tracker"
        description=""
      />
      <Thumbnail
        link=""
        image=""
        title="Neighborhood Partyhub"
        description=""
      />
      <Thumbnail
        link=""
        image=""
        title=""
        description=""
      />
      <Thumbnail
        link=""
        image=""
        title=""
        description=""
      />
      <Thumbnail
        link=""
        image=""
        title=""
        description=""
      />
      <Thumbnail
        link=""
        image=""
        title=""
        description=""
      />
    </div>
  )
}
 
export default Projects;