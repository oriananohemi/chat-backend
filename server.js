const express = require("express");
const bodyParser = require("body-parser");

const router = require("./network/routes");

const app = express();

app.use(bodyParser.json());
// app.use(router);
router(app);

app.use("/app", express.static("public"));

// app.use("/", (req, res) => {
//   res.send("Hola");
// });

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
