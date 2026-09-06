import mongoose from "mongoose";

const flashSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
    },

    price: { 
    type: Number,
    required: true,
}, 
    image: { 
    type: String,
    required: true, 
    },

    },

    {
        timestamps: true,
    },
);

const flashs = mongoose.model("flashs", flashSchema);

export default flashs;