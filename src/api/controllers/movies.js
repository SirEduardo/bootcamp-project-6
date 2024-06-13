const Movies = require("../models/movies")




const getMovies = async (req, res, next) => {
    try {
        const movies = await  Movies.find().populate("characters")
        return res.status(200).json(movies)
    } catch (error) {
        return res.status(400).json(error)
    }
}

const postMovie = async (req, res, next) => {
    try {
        const newMovie = new Movies(req.body)
        const createdMovie = await newMovie.save()
        return res.status(200).json(createdMovie)
    } catch (error) {
        return res.status(400).json(error)
    }
}

const updateMovie = async (req, res, next) => {
    try {
        const { id } = req.params
        const oldMovie = await Movies.findById(id)
        newMovie = new Movies(req.body)
        newMovie._id = id
        newMovie.characters = [...oldMovie.characters, ...req.body.characters]
        const updatedMovie = await Movies.findByIdAndUpdate(id, newMovie, {new:true})
        return res.status(200).json(updatedMovie)
    } catch (error) {
        return res.status(400).json(error)
    }
}

const deleteMovie = async (req, res, next) => {
    try {
        const { id } = req.params
        await Movies.findByIdAndDelete(id)
        return res.status(200).json(deletedMovie)
    } catch (error) {
        return res.status(400).json(error)
    }
}

module.exports = {
    getMovies,
    postMovie,
    updateMovie,
    deleteMovie,
}