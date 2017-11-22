

var restful= require('node-restful');
var mongoose= restful.mongoose;


var    estudiante = new mongoose.Schema({

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
    ocupacion: String



});


module.exports= restful.model('estudiante',estudiante);

