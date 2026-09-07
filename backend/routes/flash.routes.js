import express from "express"
import mongoose from "mongoose";
import flash from "../models/flashs.model.js";
import { createFlashs, deleteFlash, getFlashs, UpdadteFlash } from "../controllers/flash.controller.js";


const router = express.Router();


router.get("/", getFlashs);



router.post("/", createFlashs);

router.put("/:id", UpdadteFlash);


router.delete("/:id", deleteFlash);

export default router;