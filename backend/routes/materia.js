
var express= require('express');
var router= express.Router();


var Productos = require('../models/materia');


Productos.methods(['get','put','post','delete','search']);
Productos.register(router,'/materia');


module.exports=router;