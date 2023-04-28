// configration
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan'
import dotenv from 'dotenv'
import multer from 'multer'
// import routes
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'


const upload = multer({ storage: multer.memoryStorage() });
const app = express();
dotenv.config();

app.use(morgan('dev'))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

const corsSettings = {
    origin: ['http://localhost:3000'],
    methode: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
};

app.use(cors(corsSettings));

app.use('/posts', postRoutes);
app.use('/user', userRoutes)

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`)))
    .catch((error) => console.log(error));
