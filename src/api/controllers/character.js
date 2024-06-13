
const Character = require("../models/Character")

const getCharacters = async (req, res, next) => {
    try {
        const characters = await Character.find().populate("movies")
        return res.status(200).json(characters)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const getCharactersById = async (req, res,) => {
    const id = req.params.id
    try {
        const character = await Character.findById(id).populate("movies")
        if (character) {
            return res.status(200).json(character)
        }else{
            return res.status(404).json("No character found")
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}


const getCharactersByAlias = async (req, res) => {
    const { alias } = req.params
    try {
        const characterByAlias = await Character.find({ alias: alias }).populate("movies")
        return res.status(200).json(characterByAlias)
    } catch (error) {
        return res.status(500).json(error)
    }
}


const postCharacter = async (req, res, next) => {
    try {
        const newCharacter = new Character(req.body)
        const createdCharacter = await newCharacter.save()
        return res.status(201).json(createdCharacter)
    } catch (error) {
        next(error)
    }
}

const editCharacter = async (req, res, next) => {
    try {
        const { id } = req.params
        const characterModify = new Character(req.body)
        characterModify._id = id
        const characterUpdated = await Character.findByIdAndUpdate(id, characterModify, {new:true})
        return res.status(200).json(characterUpdated)
    } catch (error) {
        return next(error)
    }
}

const deleteCharacter = async (req, res, next) => {
    try {
        const {id} = req.params
        await Character.findByIdAndDelete(id)
        return res.status(200).json("Character deleted!")
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    getCharacters,
    getCharactersById,
    getCharactersByAlias,
    postCharacter,
    editCharacter,
    deleteCharacter,
}