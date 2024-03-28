import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';

//configure env
dotenv.config()

//database config
connectDB();

//rest object
const app = express()

//middleWares
app.use(express.json())
app.use(morgan('dev'))

//rest api
app.get(`/`, (req, res) => {
    res.send(
        "<h1>Welcome to ecommerce Mern Stack app</h1>"
    )
})

//Port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`server running at ${PORT} and its still in ${process.env.DEV_MODE} mode`);
})