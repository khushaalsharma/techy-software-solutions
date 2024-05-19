import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/HomePageStyles.css";
import axios from 'axios';


const Footer = () => {

    const [formData, setFormData] = useState({
        name: "",
        org: "",
        email: "",
        feedback: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const sendFeedback = async() => {
        try{
            await axios
                    .post("https://techy-software-solutions.vercel.app/feedback", formData, 
                     {headers:{
                        'Content-Type': "application/json"
                     },
                     withCredentials: true})
                    .then(response => {
                        alert("Thanks for sharing your feedback");
                    })
                    .catch(error => {
                        console.log(error);
                        alert("Error in sending feedback, try again later");
                    })
        }   
        catch(error){
            alert("Error sending feedback!!!");
        }
    }

    return (
        <div className='row footer'>
            <div className='col-md-6 feedback-form'>
                <h3>Share your Feedback with us</h3>
                <form method="POST">
                    <input
                        name='name'
                        type='text'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Your Name'
                    />
                    <input
                        name='org'
                        type='text'
                        value={formData.org}
                        onChange={handleChange}
                        placeholder='Your Organization'
                    />
                    <input
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Your Email'
                    />
                    <textarea
                        name='feedback'
                        value={formData.feedback}
                        onChange={handleChange}
                        aria-expanded = {false}
                        placeholder='Your feedback'
                    />
                    <button className='btn btn-success' onClick={sendFeedback}>Send</button>
                </form>
            </div>
            <div className='col-md-6'>
                <div className='row'>
                    <div className='col'>
                        <div className='brand-logo'>
                            <h1>techy</h1>
                            <h6>Software</h6>
                        </div>
                        <div className='social-media'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>

                        </div>
                    </div>
                    <div className='col'>
                        <p className='footer-sublinks' onClick={() => {window.location.href = "/"}}>Home</p>
                        <p className='footer-sublinks' onClick={() => {window.location.href = "/contact/#contact-info"}}>Contact</p>
                        <p className='footer-sublinks' onClick={() => {window.location.href = "#services"}}>Services</p>
                        <p className='footer-sublinks' onClick={() => {window.location.href = "/portfolio"}}>Portfolio</p>
                        <button className='btn btn-secondary' onClick={() => {window.location.href = "/contact"}}>Book a demo</button>
                    </div>
                </div>
            </div>
            <p>©️techy software solutions 2024</p>
        </div>
    )
}

export default Footer
