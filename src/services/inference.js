require("dotenv").config();
// const { Storage } = require("@google-cloud/storage");
const tfjs = require("@tensorflow/tfjs-node");

function loadModel(plantType) {
  const bucket = process.env.BUCKET_MODEL_NAME;
  const modelUrl = `https://storage.googleapis.com/${bucket}/models/${plantType}/model.json`;
  if (plantType == "apple") {
    return tfjs.loadGraphModel(modelUrl);
  } else {
    return tfjs.loadLayersModel(modelUrl);
  }
}

function predict(model, imageBuffer) {
  const tensor = tfjs.node.decodeJpeg(imageBuffer).resizeNearestNeighbor([224, 224]).expandDims().toFloat();

  return model.predict(tensor).data();
}

module.exports = { loadModel, predict };
