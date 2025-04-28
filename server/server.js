import express from 'express';
import cors from 'cors';

import authRouter from './routes/authentication.js'
import userRouter from './routes/user.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("../client/dist"));

// logging on the console
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(3000);