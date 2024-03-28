import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to mongoDB Database ${conn.connection.host}`)
    } catch (error) {
        console.log(`Erros is ${error}`)
    }
}

export default connectDB;