const { FORMAT_IMAGES } = require('../../utils/constants');
const ApiError = require('../../utils/error-class-api');

/**
 * @description Verifica si los valores de formatos de los parámetros son correctos
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Siguiente middleware
 */
function checkConverterImageParams(req, res, next) {
  try {
    const format = req.params.format;
    if (!FORMAT_IMAGES.includes(format)) {
      throw new ApiError('Formato de imagen incorrecto', 403);
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { checkConverterImageParams };
