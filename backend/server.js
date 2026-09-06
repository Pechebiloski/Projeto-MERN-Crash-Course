import express, { request, response } from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import flashs from './models/flashs.model.js';


dotenv.config();

const app = express();

app.post("/flashs", async (request, response) => {
    const flash = request.body;

    if(!flash.name || !flash.price || flash.image) {
        return response.status(400).json({ success: false, message: "please provide all fields"});
    }

    const newFlash = new flash(flash);

    try {
        await newFlash.save();

        response.status(201).json({ success: true, data: newFlash});
    
    } catch (error) {
        console.error("error in create flash:", error.message);
        response.status(500).json({ success: false, message: "server error" });

    }
});

console.log(process.env.MONGO_URI);


app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
});
