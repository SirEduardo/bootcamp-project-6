const Movies = require("../models/movies");

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movies.find().populate("characters");
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postMovie = async (req, res, next) => {
  try {
    const newMovie = new Movies(req.body);

    const movieDuplicated = await Movies.findOne({ name: req.body.name })

    if (movieDuplicated) {
      return res.status(400).json("Esta pelicula ya existe")
    }

    const createdMovie = await newMovie.save();
    return res.status(200).json(createdMovie);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateMovie = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oldMovie = await Movies.findById(id);
    const updatedCharacters = [
      ...new set([...oldMovie.characters, ...req.body.characters]),
    ];
    const updatedData = {
      ...req.body,
      characters: updatedCharacters,
    };
    const updatedMovie = await Movies.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Movies.findByIdAndDelete(id);
    return res.status(200).json(deletedMovie);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getMovies,
  postMovie,
  updateMovie,
  deleteMovie,
};
