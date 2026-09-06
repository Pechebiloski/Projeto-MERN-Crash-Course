import express, { request, response } from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import flashs from './models/flashs.model.js';

dotenv.config();

import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();

app.use(express.json());


app.get("/api/flashs", async (request, response) => {
    try  { 
        const flashsList = await flashs.find();
        response.status(200).json({
            success: true,
            data: flashs
        });

    } catch (error) {
        console.log("Erro ao buscar produto", error.message);
        response.status(500).json({
            success: false,
            message: "Server error"
        });
    }
})



app.post("/api/flashs", async (request, response) => {

    const flash = request.body;

    if (!flash.name || !flash.price || !flash.image) {
        return response.status(400).json({
            success: false,
            message: "Please provide all fields"
        });
    }

    const newFlash = new flashs(flash);

    try {
        await newFlash.save();

        response.status(201).json({
            success: true,
            data: newFlash
        });

    } catch (error) {
    console.error("Erro na criação do flash:", error);

    response.status(500).json({
        success: false,
        message: error.message
        });
    }
});

app.put("/api/flash/:id", async (request, response) => {
    const { id } = request.params;

    const flash = request.body;

    try { 
      const UpdadteFlash = await flashs.findByIdAndUpdate(
        id, 
        flash,
        {new: true});

        response.status(200).json({
        success: true,
        data: UpdadteFlash
      });
    } catch (error) { 
        response.status(500).json({
            success: false,
            message: "Serever error"
        });

    }
});


app.delete("/api/flashs/:id", async(request, response) => {
    const {id} = request.params;

    try {
        const flash = await flashs.findById(id);

        if(!flash) {
            return response.status(404).json({
                success: false,
                message: "Flash não encontrado"
            });
        }
        await flashs.findByIdAndDelete(id);

        response.status(200).json({
            success: true,
            message: "Flash deletado com sucesso"
        });
     } catch (error) {
        console.error("Erro ao deletar flash", error.message);

        response.status(500).json({
            success: false,
            message: "Erro no servidor"
        });
     }

});



app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
});
