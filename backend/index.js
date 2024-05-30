import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from "cors";
import dotenv from 'dotenv'

const app = express();

app.use(express.json());

dotenv.config();

app.use(cors(
));

app.use('/books', booksRoute);

const port = process.env.PORT;
const MongoDBURL = process.env.url;

mongoose
    .connect(MongoDBURL)
    .then(()=>{
        console.log("Successfully connected to database!");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
            }
        );
    })
    .catch((error)=>{
        console.log(error);
    })