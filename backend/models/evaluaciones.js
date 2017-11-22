

var restful= require('node-restful');
var mongoose= restful.mongoose;


var    evaluaciones = new mongoose.Schema({


    estado:String,
    evaluacion_grupal:{},
    evaluacion_personal:Array,
    grupo_numero:String,
    integrantes:Array,
    fecha:String,
    cuestionario:{},
    tema:String


});


module.exports= restful.model('evaluaciones',evaluaciones);

