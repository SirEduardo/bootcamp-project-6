const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema (
    {
        name: { type: String, required : true},
        duration: { type: Number, required: true },
        year: { type: Number, required: true },
        characters: [{ type: mongoose.Types.ObjectId, ref: "characters" }]
    },
    {
        timestamps: true
    }
)

const Movies = mongoose.model("movies", moviesSchema, "movies")
module.exports = Movies