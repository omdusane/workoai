import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import basicAuth from './middlewares/auth.js';

// configuring env vars 
dotenv.config({
    path: '.env'
})

const app = express();
app.use(bodyParser.json());

// connecting to the database
mongoose.connect(process.env.DB_CONNECTION).then(
    console.log("Database connected successfully")
).catch((e)=>{
    console.log(e);
}
);

// middleware for basic auth
app.use(basicAuth)

// Registering the routes
app.use("/worko/user", userRouter)

// health check
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

