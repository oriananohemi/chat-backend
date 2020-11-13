const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const response = require("./network/response");

const app = express();

app.use(bodyParser.json());
app.use(router);

router.get("/", (req, res) => {
  // console.log(req.query);
  // console.log(req.body);
  // console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res);
  // res.send("Lista de mensajes");
  // res.status(201).send();
});

router.post("/", (req, res) => {
  res.send("Mensaje" + req.body.text + "añadido");
});

// app.use("/", (req, res) => {
//   res.send("Hola");
// });

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
