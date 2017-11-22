
var express= require('express');
var router= express.Router();


var Productos = require('../models/matricula');


Productos.methods(['get','put','post','delete','search']);
Productos.register(router,'/matricula');


module.exports=router;