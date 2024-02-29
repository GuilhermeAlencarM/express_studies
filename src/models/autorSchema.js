import { Double, Int32 } from "mongodb";
import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    nome:{type:String, required:true},
    nacionalidade:{type:String, required:true},
    anoNascimento:{type:Int32, required:true},
    versionKey:false
});

const autorModel = mongoose.model('autores', autorSchema);

export default autorModel;
