const sharp = require("sharp");
const tf = require("@tensorflow/tfjs-node");

const preProcessImg = async (imgBuffer) => {
  const resizedImage = await sharp(imgBuffer).resize(224, 224).toFormat("jpeg").toBuffer();

  return tf.node.decodeImage(resizedImage);
};

module.exports = { preProcessImg };
