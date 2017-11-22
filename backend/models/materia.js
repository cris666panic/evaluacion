

var restful= require('node-restful');
var mongoose= restful.mongoose;


var    materia = new mongoose.Schema({


    nombre: String,
    facultad :String,
    carrera:String



});


module.exports= restful.model('materia',materia);

