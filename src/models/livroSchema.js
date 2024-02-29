import { Double, Int32 } from "mongodb";
import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    titulo:{type:String, required:true},
    nPaginas:{type:Int32, required:true},
    preco:{type:Double, required:true},
    versionKey:false
});

const livroModel = mongoose.model('livros', livroSchema);

export default livroModel;


