const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

const router = require("./network/routes");

const uri =
  "mongodb+srv://db_user_pnode:alexander@cluster0.w5af8.mongodb.net/chat_telegram_platzi?retryWrites=true&w=majority";

db(uri);

const app = express();

app.use(bodyParser.json());
// app.use(router);
router(app);

app.use("/app", express.static("public"));

// app.use("/", (req, res) => {
//   res.send("Hola");
// });

app.listen(3200);
console.log("La aplicacion esta escuchando en http://localhost:3200");
