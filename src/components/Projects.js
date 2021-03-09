import React from 'react';
import Thumbnail from './Thumbnail'; 
import '../App.css';


 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div class="thumbnails">
      <h1>Projects</h1>
      <Thumbnail
        link="https://chitown-devs.github.io/COVID-Data-Search-App/"
        image="https://www.baywardbulletin.ca/wp-content/uploads/2020/09/People-wearing-Masks-496x248.jpg"
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