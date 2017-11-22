
var express= require('express');
var router= express.Router();


var Productos = require('../models/cuestionario');


Productos.methods(['get','put','post','delete','search']);
Productos.register(router,'/cuestionario');


module.exports=router;