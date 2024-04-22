const multer = require('multer');
const upload = multer();

// CONTROLADORES DE RUTAS
const { converterImage } = require('./images.controller') 

/**
 * @param {Error} err Error generado
 * @param {import('express').Request} req Solicitud
 * @param {import('express').Response} res Respuesta
 * @param {import('express').NextFunction} next Siguiente middleware
 */
function errorHandler(err, req, res, next) {
  console.log('[ERROR-CONTROLADOR]', err)
  res.send(err);
}

module.exports = {
  imageController: [upload.single('image'), converterImage, errorHandler],
};
