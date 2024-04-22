const { converterService } = require('../services');

/**
 * @description Controlador para manejo de la conversión de imagenes únicas
 * @param {import("express").Request} req Solicitud
 * @param {import("express").Response} res Respuesta
 * @param {import("express").NextFunction} next Siguiente middleware
 */
async function converterImage(req, res, next) {
  try {
    const buffer = req.file.buffer;
    const format = req.params.format;
    const output = await converterService.converterImage(buffer, format);
    res.contentType(`image/${format}`).send(output);
  } catch (error) {
    next(error);
  }
}

module.exports = { converterImage };
