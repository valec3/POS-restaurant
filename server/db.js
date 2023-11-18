import mongoose from "mongoose";

const dbUri ="mongodb+srv:";

// Crear una función asincrónica para conectar a la base de datos
export async function connectToDatabase() {
    try {
        await mongoose.connect(dbUri);

        console.log("Conexión a MongoDB Atlas establecida con éxito!");
    } catch (err) {
        console.error("Error de conexión a MongoDB Atlas:", err);
    }
}