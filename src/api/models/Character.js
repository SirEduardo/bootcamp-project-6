const mongoose = require("mongoose")


const characterSchema = new mongoose.Schema (
    {
        name: { type: String, required: true },
        age: { type: Number },
        alias: { type: String, required: true },
        movies: [{ type: mongoose.Types.ObjectId, ref: "movies" }]
    },
    {
        timestamps: true,
    }
)

const Character = mongoose.model("characters", characterSchema, "characters")
module.exports = Character