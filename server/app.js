// configration
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan'
import dotenv from 'dotenv'
// import routes
import postRoute from './routes/posts.js'

const app = express();
dotenv.config();

app.use(morgan('dev'))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/posts', postRoute);


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, ()=>console.log(`server running on http://localhost:${PORT}`)))
    .catch((error)=>console.log(error));
