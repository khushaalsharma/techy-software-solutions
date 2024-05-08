import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/PortfolioStyles.css";

import WebNavbar from './WebNavbar.js';
import Footer from './Footer.js';
import ProjectCard from './ProjectCard.js';

const PortfolioPage = () => {
  return (
    <>
        <WebNavbar/>
        <div className='portfolio'>
            <section id='portfolio'>
                <h3>Our previous work...</h3>
                <div className='projectDiv'>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </section>
        </div>
        <Footer/>
    </>
  )
}

export default PortfolioPage
