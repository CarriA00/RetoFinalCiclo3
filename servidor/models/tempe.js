import  mongoose  from "mongoose";
const Schema=mongoose.Schema;


const tempeShema=new Schema({

    nombre:{type:String, required:[true,'Nombre obligatorio']},
    temperatura:String,
    estado:String,
    temId:String,
    date:{type:Date, default: Date.now},
    activo:{type:Boolean, default:true}

});

//convertir a modelo
const Tempe=mongoose.model('Tempe',tempeShema);
export default Tempe;