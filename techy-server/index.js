import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import { configDotenv } from "dotenv"
import {newCustomer, feedback} from "./RouteFunctions/UtilityFunction.js";

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
    origin: "http://locahost:3000",
    credentials: true
}));

//REST APIs
app.post("/addCustomer", newCustomer);
app.post("/feedback", feedback);

app.listen(process.env.PORT, () => {
    console.log("Server connected");
})
