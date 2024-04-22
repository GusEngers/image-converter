const multer = require('multer');
const upload = multer();
const ApiError = require('../../utils/error-class-api');

const { converterImage } = require('./images.controller');
const { checkConverterImageParams } = require('../middlewares/check-params');

/**
 * @param {Error} err Error generado
 * @param {import('express').Request} req Solicitud
 * @param {import('express').Response} res Respuesta
 * @param {import('express').NextFunction} next Siguiente middleware
 */
function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json(err.response);
  }
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: 'Error de la gestión de la imagen', statusCode: 400, errors: [err.message] });
  }
  res.status(400).json({ message: err.message, statusCode: 400 });
}

module.exports = {
  imageController: [upload.single('image'), checkConverterImageParams, converterImage, errorHandler],
};
