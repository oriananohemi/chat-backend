const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const response = require("./network/response");

const app = express();

app.use(bodyParser.json());
app.use(router);

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

app.use("/app", express.static("public"));

// app.use("/", (req, res) => {
//   res.send("Hola");
// });

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
