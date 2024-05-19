import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"

import { config } from "dotenv"
import {newCustomer, feedback} from "./RouteFunctions/UtilityFunction.js";

config();

const app = express();

mongoose
    .connect(process.env.DB_STRING)
    .then(connected => {
        console.log("Database Connected");
    })
    .catch(error => {
        console.log(error);
    })

app.use(cors({
    origin: "https://techy-software.vercel.app",
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log(`Received request for: ${req.url}`);
    next();
})

//REST APIs
app.post("/addCustomer", newCustomer);
app.post("/feedback", feedback);

app.listen(5000, () => {
    console.log("Server connected at 5000");
})
