import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import { configDotenv } from "dotenv"

const app = express();

app.use(cors({
    origin: "http://locahost:3000",
    credentials: true
}));




app.listen(process.env.PORT, () => {
    console.log("Server connected");
})
