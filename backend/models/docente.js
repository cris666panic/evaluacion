

var restful= require('node-restful');
var mongoose= restful.mongoose;


var    docente = new mongoose.Schema({

    cedula: String,
    nombre: String,
    apellido: String,
    email: String,
    fecha_de_nacimiento: String,
    sexo: String,
    estado_civil: String,
    direccion: String,
    telefono: String,
    celular: String,
    facultad :String,
    carrera:String



});


module.exports= restful.model('docente',docente);

