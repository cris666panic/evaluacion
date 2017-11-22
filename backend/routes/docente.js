
var express= require('express');
var router= express.Router();


var Productos = require('../models/docente');


Productos.methods(['get','put','post','delete','search']);
Productos.register(router,'/docente');


module.exports=router;