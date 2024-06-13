const { getCharacters, getCharactersById, getCharactersByAlias, postCharacter, deleteCharacter, editCharacter } = require("../controllers/Character")

const characterRouter = require("express").Router()


characterRouter.get("/", getCharacters)

characterRouter.get("/:id", getCharactersById)

characterRouter.get("/:alias", getCharactersByAlias)

characterRouter.post("/", postCharacter)

characterRouter.delete("/:id", deleteCharacter)

characterRouter.put("/:id", editCharacter)

module.exports = characterRouter