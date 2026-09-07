import express, { request, response } from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import flashRoutes from "./routes/flash.routes.js";

import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/flashs", flashRoutes)

app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
});
