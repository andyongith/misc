import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';
import connectDB from './lib/db.js'; 
import userRoutes from './routes/user.route.js'
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js';
import notificationRoutes from './routes/notification.route.js';
import connectionRoutes from './routes/connection.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000/";
console.log(`allowed core origin ${CLIENT_URL}`);

app.use(cors({
    origin: CLIENT_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use(express.static("../client/dist"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/connections", connectionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
