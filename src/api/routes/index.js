const api = require('express').Router();

// CONTROLADORES
const con = require('../controllers');

// RUTAS PARA MANEJAR LAS SOLICITUDES DEL SERVIDOR
api.route('/images/:format').post(con.imageController)

module.exports = api;
