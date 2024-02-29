import mongoose from "mongoose"


const URL =  "mongodb+srv://admin:admin123@oxetech.qgxajqb.mongodb.net/livraria?retryWrites=true&w=majority"

async function dbConnect() {
    mongoose.connect(URL)
    return mongoose.connection
    }

export default dbConnect