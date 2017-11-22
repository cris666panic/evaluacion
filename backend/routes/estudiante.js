
var express= require('express');
var router= express.Router();


var Productos = require('../models/estudiante');


Productos.methods(['get','put','post','delete','search']);
Productos.register(router,'/estudiante');


module.exports=router;