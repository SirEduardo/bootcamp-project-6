
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("conectado con exito a la BBDD");
    } catch (error) {
        console.log("Error en la conexión de la BBDD");
        
    }
}

module.exports = { connectDB }