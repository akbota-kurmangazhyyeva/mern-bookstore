import express from 'express';
import {PORT, MongoDBURL} from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors(
));

app.use('/books', booksRoute);

mongoose
    .connect(MongoDBURL)
    .then(()=>{
        console.log("Successfully connected to database!");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            }
        );
    })
    .catch((error)=>{
        console.log(error);
    })