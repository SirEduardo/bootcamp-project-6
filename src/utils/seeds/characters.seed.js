const  mongoose = require("mongoose");
const Character = require("../../api/models/Character");
const characters = require("../../data/characters");


const seed = async () => {
   try {
        await mongoose.connect("mongodb+srv://eduardosaanchezlopez:P4JRYi7DF81UPewf@cluster0.ymmhb2d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        await Character.collection.drop()
        console.log("peliculas eliminadas");

        await Character.insertMany(characters)
        console.log("peliculas introducidas");

        await mongoose.disconnect()
    } catch (error) {
        console.log("error");
    }
    }
seed()