const { loadModel, predict } = require("../services/inference.js");

const postGrapePredictHandler = async (request, h) => {
  const { image } = request.payload;

  const model = await loadModel("grape");

  try {
    const predictions = await predict(model, image);
    const response = h.response({
      status: "success",
      message: "Prediksi anggur berhasil dilakukan",
      data: predictions,
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: "fail",
      message: `Terjadi kesalahan: ${error.message}`,
    });
    response.code(400);
    return response;
  }
};

module.exports = postGrapePredictHandler;
