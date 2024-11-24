const { loadModel, predict } = require("../services/inference.js");

const postCassavaPredictHandler = async (request, h) => {
  const { image } = request.payload;

  const model = await loadModel("cassava");

  try {
    const predictions = await predict(model, image);
    const response = h.response({
      status: "success",
      message: "Prediksi singkong berhasil dilakukan",
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

module.exports = postCassavaPredictHandler;
