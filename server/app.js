// configration
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan'
const app = express();

// import routes
import postRoute from './routes/posts.js'



app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Omed0:iUPAtm896leRyuaV@memorize.h7f5sda.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, ()=>console.log(`server running on http://localhost:${PORT}`)))
    .catch((error)=>console.log(error));

app.use('/posts', postRoute);