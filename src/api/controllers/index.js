const multer = require('multer');
const sharp = require('sharp');

// CONTROLADORES DE RUTAS
const upload = multer();

async function converterImage(req, res, next) {
  try {
    const output = await sharp(req.file.buffer).toFormat('webp').toBuffer();
    res.render('pages/view-image', {image: output.toString('base64')});
  } catch (error) {
    next(error)
  }
}

function errorHandler(err, req, res, next) {
  res.send(err);
}

module.exports = {
  homeApi: (req, res, next) => {
    res.json({ ping: 'pong' });
  },
  converterController: [upload.single('image'), converterImage, errorHandler],
};
