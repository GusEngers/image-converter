const sharp = require('sharp');

/**
 * @description Convierte una imagen de un formato a otro
 * @param {Buffer} file Buffer de imagen que se desea convertir a otro formato
 * @param {string} format Formato final de la nueva imagen
 * @returns {string} String del buffer de la nueva imagen convertida
 */
async function converterImage(file, format) {
  const output = await sharp(file).toFormat(format).toBuffer();
  return output.toString('base64');
}

module.exports = { converterImage };
