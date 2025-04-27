import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.static("../client/dist"));

app.get("/api", (req, res, next) => {
    console.log("hello");
    res.json({"Hello": "world"});
});

app.listen(3000);