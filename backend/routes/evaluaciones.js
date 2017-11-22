
var express= require('express');
var router= express.Router();


var Productos = require('../models/evaluaciones');


Productos.methods(['get','put','post','delete','search']);
Productos.register(router,'/evaluaciones');


module.exports=router;