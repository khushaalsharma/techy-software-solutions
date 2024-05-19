import mongoose from "mongoose";
import customerModel from "../models/Customer-Model.js";
import feedbackModel from "../models/Feedback-model.js";
import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, //true for only 465, false for other ports, true is equivalent to SSL/TLS
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASS
//     },
//     authMethod: "PLAIN"
// });

const connectDB = async() => {
    if(mongoose.connections[0].readyState){
        return; //already connected
    }

    await mongoose.connect(process.env.DB_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

export const newCustomer = async(req, res) => {

    await connectDB();

    if(req.method === "OPTIONS"){
        res.setHeader('Access-Control-Allow-Origin', 'https://techy-software.vercel.app');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        return res.status(200).end(); // End the preflight request
    }

    res.setHeader("Access-Control-Allow-Origin", "https://techy-software.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    const {name, email, service, desc, phone} = req.body;

    try{
        const newCust = await customerModel.create({name, email, service, description: desc, phone});


        // var mailoption = {
        //     from: "process.env.EMAIL",
        //     to: email,
        //     subject: "WELCOME TO TECHY SOFTWARE SOLUTIONS",
        //     text: "Dear Customer,\nThanks a lot for choosing us to help you with your software problems. Techy Software Solution aims to serve our customers with full commitment and specially tailored plan for each of our client. \nWe will contact you soon.\nThanks\nTeam Techy Software Solutions"
        // }

        // transporter.sendMail(mailoption, function(error, info){
        //     if(error){
        //         console.log(error);
        //     }
        //     else{
        //         console.log("Email Sent: " + info.response);
        //     }
        // });

        return res.status(200).json({
            msg: "potential customer added"
        });
    }
    catch(error){
        res.status(500).json(error);
    }
}

export const feedback = async(req, res) => {

    await connectDB();

    if(req.method === "OPTIONS"){
        res.setHeader('Access-Control-Allow-Origin', 'https://techy-software.vercel.app');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        return res.status(200).end(); // End the preflight request
    }

    res.setHeader("Access-Control-Allow-Origin", "https://techy-software.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    const {name, email, org, feedback} = req.body;

    try{
        const newFeedback = await feedbackModel.create({name, email, organization: org, feedback});

        // const mailoption = {
        //     from: process.env.EMAIL,
        //     to: email,
        //     subject: "THANKS FOR SHARING YOUR FEEDBACK",
        //     text: "Dear Customer,\hThanks for sharing your valuable feedback with us. Your feedback means a lot to us. We will try to resolve this problem as soon as possible.\nThanks\nTeam Techy Software Solution "
        // }

        // transporter.sendMail(mailoption, function(error, info){
        //     if(error){
        //         console.log(error);
        //     }
        //     else{
        //         console.log("Email sent");
        //     }
        // })

        return res.status(200).json({
            msg: "Feedback recorded"
        });
    }
    catch(error){
        res.status(500).json(error);
    }
}
