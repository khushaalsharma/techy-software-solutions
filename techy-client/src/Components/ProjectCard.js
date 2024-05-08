import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/PortfolioStyles.css";


const ProjectCard = () => {
  return (
    <div className='row projectCard'>
      <div className='col-3 project-image'>
        <img src='' alt='project-image'/>
      </div>
      <div className='col-9 project-text'>
        <h5>Cobroz</h5>
        <p>A law discussion forum based tech company. We have helped them host and create their website. Apart form this we are also working with them over their application.</p>
        <em><a href='www.cobroz.com'>www.cobroz.com</a></em>
      </div>
    </div>
  )
}

export default ProjectCard
