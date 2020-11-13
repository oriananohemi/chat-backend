const express = require("express");
const response = require("../../network/response");

const router = express.Router();

router.get("/", (req, res) => {
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "lista de mensajes");
});

router.post("/", (req, res) => {
  if (req.query.error === "ok") {
    response.error(req, res, "error simulado", 400, "Error de Prueba");
  } else {
    response.success(req, res, "Creado Correctamente", 201);
  }
});

module.exports = router;
