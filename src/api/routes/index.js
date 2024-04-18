const api = require('express').Router();

// CONTROLADORES
const con = require('../controllers');

// RUTAS PARA MANEJAR LAS SOLICITUDES DEL SERVIDOR
api.get('/', con.homeApi);
api.route('/images/webp').post(con.converterController)

module.exports = api;
