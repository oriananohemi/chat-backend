const express = require("express");

const router = express.Router();

const app = express();

app.use(router);

router.get("/", (req, res) => {
  res.send("Lista de mensajes");
});

router.post("/", (req, res) => {
  res.send("Mensaje añadido");
});

// app.use("/", (req, res) => {
//   res.send("Hola");
// });

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
