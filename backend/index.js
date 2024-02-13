import express from "express";
import mongoose from "mongoose";
import newsRoute from "./routes/newsRoutes.js";
import cors from 'cors';
import 'dotenv/config'

const app = express();

// Middleware for parsing req body
app.use(express.json());

// Middleware for handling CORS Policy
app.use(cors());

app.get('/', (request, response) => {
    return response.status(202).send({ Message: 'Welcome!' });
})

app.use('/news', newsRoute);

// Database connection
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('App connected to database');
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port:  ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error)
    });


