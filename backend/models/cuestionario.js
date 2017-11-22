

var restful= require('node-restful');
var mongoose= restful.mongoose;


var    cuestionario = new mongoose.Schema({


    materia: {},
    docente :{},
    estado:String,
    cuestionario:Array



});


module.exports= restful.model('cuestionario',cuestionario);

