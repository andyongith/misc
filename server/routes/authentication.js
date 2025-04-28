import express from 'express';
import bcrypt from 'bcrypt';
import { getPasswordHash, createProfile, getAllUsers } from '../db/queries.js';

const router = express.Router();

// This route is only for testing purposes
// This must be removed later
router.get("/allusers", (req, res) => {
    const users = getAllUsers();
    console.log(users);
    res.send(JSON.stringify(Object.fromEntries(users)));
});

router.post("/signup", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(req.body.password, salt);
        createProfile(
            req.body.username,
            passwordHash,
            req.body.name,
            req.body.userType
        );
        res.send("Account created");
    }
    catch (e) {
        console.log(e);
        res.send(500);
    }
});

router.get("/login", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const passwordHash = getPasswordHash(username);
    if (passwordHash === null) {
        return res.send("user not available");
    }
    try {
        if(await bcrypt.compare(password, passwordHash)) {
            res.send("TOKEN");
        }
        else {
            res.send("Wrong Password");
        }
    }
    catch(e) {
        console.log(e);
        res.send(500);
    }
});

export default router;