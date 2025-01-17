import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import authRouter from "./src/routes/auth.js"
import formRouter from "./src/routes/formroute.js"
import reviewRouter from "./src/routes/reviewroute.js"
import mongoose from "mongoose"
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
const MONGO_URI = "mongodb+srv://vinayaktoursdevbhumi:<Vinayak@3641>@cluster0.t32lr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const corsOptions = {
  origin: 'https://vinayaktourss.com', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));



app.use("/api/form", formRouter)
app.use("/api/auth", authRouter)
app.use("/api/review", reviewRouter)

// Start the server
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to Database");

        app.listen(PORT, () => {
            console.log("Listening to port 3000");
        })
    }).catch((err) => {
        console.log(err);
    })
