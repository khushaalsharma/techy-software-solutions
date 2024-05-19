import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/ContactStyles.css";
import axios from "axios";

import WebNavbar from './WebNavbar.js';
import Footer from './Footer.js';


const ContactPage = () => {

    const [scheduled, setScheduled] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        org: "",
        email: "",
        phone: "",
        domain: "",
        desc: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    async function schedule(e){

        e.preventDefault();

        try{
            await axios
                .post("https://techy-software-solutions.vercel.app/addCustomer", formData, {withCredentials: true})
                .then(response => {
                    setScheduled(true);
                })
                .catch(error => {
                    console.log(error);
                    alert("Try again later");
                })
        }
        catch(error){
            alert("Error scheduling, try again later");
        }
    }

    return (
        <>
            <WebNavbar/>
            <div className='contact-page'>
                <section id='appointment'>
                    {scheduled ? <h4>We've recorded your details. We will call you soon</h4> : <div className='apptForm'>
                        <h4>Schedule a call with us</h4>
                        <form method="POST">
                            <input
                                name='name'
                                type='text'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your Name'
                                required
                            />
                            <input
                                name='org'
                                type='text'
                                value={formData.org}
                                onChange={handleChange}
                                placeholder='Your Organization'
                                required
                            />
                            <input
                                name='email'
                                type='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Your Email'
                                required
                            />
                            <input
                                name='phone'
                                type='number'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='Your Phone'
                                required
                            />
                            <select name='domain' value={formData.domain} onChange={handleChange}>
                                <option value="web">Web Development</option>
                                <option value="app">App Development</option>
                                <option value="uiux">UI/UX Design</option>
                                <option value="ai">AI Services</option>
                                <option value="seo">SEO Strategies</option>
                                <option value="graphic">Graphic Designs</option>
                            </select>
                            <textarea
                                name='desc'
                                value={formData.desc}
                                onChange={handleChange}
                                placeholder='Add some description about the project'
                            />
                            <button className='btn btn-danger' onClick={schedule}>Schedule</button>
                        </form>
                    </div>}
                </section>
                <section id='contact'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            <h3>team@techysoft.com</h3>
                        </div>
                        <div className='col-sm-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <h3>+91-11-1234 5678</h3>
                        </div>
                    </div>
                </section>
                <section>
                    
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default ContactPage
