const sharp = require('sharp');

/**
 * @description Convierte una imagen de un formato a otro
 * @param {Buffer} buffer Buffer de imagen que se desea convertir a otro formato
 * @param {string} format Formato final de la nueva imagen
 * @returns {Promise<Buffer>} Buffer de la nueva imagen convertida
 */
async function converterImage(buffer, format) {
  const output = await sharp(buffer).toFormat(format).toBuffer();
  return output;
}

module.exports = { converterImage };
