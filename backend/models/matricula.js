

var restful= require('node-restful');
var mongoose= restful.mongoose;


var    matricula = new mongoose.Schema({


    estudiante: {},
    periodo :{},
    estado:String,
    materias:Array



});


module.exports= restful.model('matricula',matricula);

