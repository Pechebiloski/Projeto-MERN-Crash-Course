import flashs from "../models/flashs.model.js";
import mongoose from "mongoose";


export const getFlashs = async (request, response) => {
    try  { 
        const flashsList = await flashs.find();
        response.status(200).json({
            success: true,
            data: flashsList
        });

    } catch (error) {
        console.log("Erro ao buscar produto", error.message);
        response.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

export const createFlashs = async (request, response) => {

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
};

export const UpdadteFlash = async (request, response) => {
    const { id } = request.params;

    const flash = request.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({
            success: false,
            message: "Invailid Flash Id"
        });
    }

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
};

export const deleteFlash = async(request, response) => {
    const {id} = request.params;

    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({
            success: false,
            message: "Invailid Flash Id"
        });
    }

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
    };