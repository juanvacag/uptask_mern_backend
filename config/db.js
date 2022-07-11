import mongoose from 'mongoose'

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`MongoDB conectado en: ${url}`)

    } catch (error) {
        console.log(`el error es: ${error.menssage}`)
        process.exit(1)
    }
}
export default conectarDB