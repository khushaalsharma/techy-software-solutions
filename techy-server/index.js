import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import { config } from "dotenv"
import {newCustomer, feedback} from "./RouteFunctions/UtilityFunction.js";

config();

const app = express();

mongoose
    .connect("mongodb://127.0.0.1:27017/techy-software")
    .then(connected => {
        console.log("Database Connected");
    })
    .catch(error => {
        console.log(error);
    })

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//REST APIs
app.post("/addCustomer", newCustomer);
app.post("/feedback", feedback);

app.listen(5000, () => {
    console.log("Server connected at 5000");
})
