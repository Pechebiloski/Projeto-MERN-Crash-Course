import express, { request, response } from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import flashRoutes from "./routes/flash.routes.js";

import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/flashs", flashRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:" + PORT);
});
