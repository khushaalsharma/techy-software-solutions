import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/HomePageStyles.css";

const WebNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">techy</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse sublinks" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                </ul>
                <button className='btn btn-primary demoBtn' onClick={() => {window.location.href = "/contact"}}>Book a demo</button>
            </div>
        </div>
    </nav>
  )
}

export default WebNavbar
