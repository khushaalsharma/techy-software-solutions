import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/PageStyles.css";

import WebNavbar from './WebNavbar.js';
import Footer from './Footer.js';

const HomePage = () => {

  const testimonials = [
    {
      comment: "The team at techy is simply exceptional. Their app development skills are top-notch, delivering a seamless and intuitive mobile experience that exceeded our expectations. Their graphic design work has elevated our brand identity, leaving a lasting impression on our customers. Their SEO strategy has boosted our online visibility, driving valuable traffic to our website. Truly a partner you can trust!",
      by: "Jasmine Downey, Marketing Director ABC"
    },
    {
      comment: "We are incredibly impressed with the professionalism and talent of techy. Their web development expertise has transformed our outdated website into a modern and dynamic platform that reflects our brand vision perfectly. Their AI solutions have revolutionized how we analyze data, providing invaluable insights for strategic decision-making. Their SEO strategy has significantly improved our search engine rankings, driving organic traffic and generating leads. Thank you for exceeding our expectations!",
      by: "Steve Rogers, Founder AAA"
    }
  ]

  const returnTestimonials = () => {
    return testimonials.map((testimonial, index) => (
      <div key={index} className='carousel-item'>
        <h6>"{testimonial.comment}"</h6>
        <em>{testimonial.by}</em>
      </div>
    ))
  }

  return (
    <>
        <WebNavbar/>
        <div>
          <section id='firstSection'>
            <div className='row'>
              <div className='col introText'>
                <h1>Discover Our Cutting Edge Solution</h1>
                <p>Empower your business with innovative software solutions tailored to your needs. We help building bridges between ideas and reality with our expert software craftsmanship.</p>
              </div>
              <div className='col introImg'>
                <div className='introImg-brand'>
                  <h1>techy</h1>
                </div>
              </div>
            </div>
            <button className='btn btn-dark apptBtn' onClick={() => {window.location.href = "/contact"}}>Book an Appointment</button>
          </section>
          <section id='services'>
            <h1>What we offer</h1>
            <div className='img-slideshow'></div>
            <div className='row'>
              <div className='col-md-6 service web'>
                <h2>Web Application</h2>
              </div>
              <div className='col-md-6 service app'>
                <h2>Mobile Application</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 service uiux'>
                <h2>UI/UX Design</h2>
              </div>
              <div className='col-md-6 service ai'>
                <h2>AI Services</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 service seo'>
                <h2>SEO Strategies</h2>
              </div>
              <div className='col-md-6 service gdesign'>
                <h2>Graphic Design</h2>
              </div>
            </div>
          </section>
          <section id='process'>
            <h3>Our process</h3>
            <div className='processCards'>
              <div className='process-card'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M6 8h2"/><path d="M6 12h2"/><path d="M16 8h2"/><path d="M16 12h2"/></svg>
                </div>
                <h5>Requirement Analysis</h5>
                <p>We understand your requirements and expectations from the product. Ensuring a deep understanding about your vision and mission is our aim.</p>
              </div>
              <div className='process-card'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-dashed-kanban"><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/><path d="M5 3a2 2 0 0 0-2 2"/><path d="M9 3h1"/><path d="M14 3h1"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 9v1"/><path d="M21 14v1"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M14 21h1"/><path d="M9 21h1"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M3 14v1"/><path d="M3 9v1"/></svg>
                </div>
                <h5>Prototype Presentation</h5>
                <p>A prototype specific to your requirements will be generated in next 2 weeks, showcasing the basic working of the product.</p>
              </div>
              <div className='process-card'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <h5>Product Development</h5>
                <p>Based on your inputs on prototype we develop the product according to teh said timeline.</p>
              </div>
              <div className='process-card'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
                </div>
                <h5>With You Till End</h5>
                <p>As we deliver the product to you, we ensure that you don't face any problems with it by maintaining the product at regular intervals as per your inputs.</p>
              </div>
            </div>
          </section>
          <section id='testimonials'>
            <h4>See what are clients say</h4>
            <div id='restTestimonial' className='carousel slide' data-ride="carousel">
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <h6>"Working with techy has been a game-changer for our business. Their expertise in web development and UI/UX design transformed our online presence, resulting in a significant increase in user engagement and conversions. Their AI solutions have streamlined our processes, making our operations more efficient than ever. Highly recommended!"</h6>
                  <em>John Smith, CEO XYZ</em>
                </div>
                {returnTestimonials()}
              </div>
              <a className='carousel-control-prev' href='#restTestimonial' role='button' data-slide="prev">
                <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='carousel-control-next' href='#restTestimonial' role='button' data-slide="next">
                <span className='carousel-control-next-icon' aria-hidden="true"></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
          </section>
        </div>
        <Footer/>
    </>
  )
}

export default HomePage
