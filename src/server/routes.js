const postApplePredictHandler = require("../API/appleDiagnose");
const postCassavaPredictHandler = require("../API/cassavaDiagnose");
const postGrapePredictHandler = require("../API/grapeDiagnose");

const routes = [
  {
    method: "POST",
    path: "/diagnoses/apple",
    handler: postApplePredictHandler,
  },
  {
    method: "POST",
    path: "/diagnoses/cassava",
    handler: postCassavaPredictHandler,
  },
  {
    method: "POST",
    path: "/diagnoses/grape",
    handler: postGrapePredictHandler,
  },
  {
    method: "POST",
    path: "/diagnoses/potato",
    handler: () => {},
  },
  {
    method: "POST",
    path: "/diagnoses/rice",
    handler: () => {},
  },
  {
    method: "POST",
    path: "/diagnoses/sugarcane",
    handler: () => {},
  },
  {
    method: "POST",
    path: "/diagnoses/tea",
    handler: () => {},
  },
  {
    method: "POST",
    path: "/diagnoses/tomato",
    handler: () => {},
  },
  {
    method: "POST",
    path: "/diagnoses/wheat",
    handler: () => {},
  },
];

module.exports = routes;
