const express = require("express");
const app = express();
const server = require("http").Server(app);

const bodyParser = require("body-parser");
const socket = require("./socket");
const db = require("./db");
const router = require("./network/routes");

const uri =
  "mongodb+srv://db_user_pnode:alexander@cluster0.w5af8.mongodb.net/chat_telegram_platzi?retryWrites=true&w=majority";

db(uri);

app.use(bodyParser.json());
app.use("/app", express.static("public"));

socket.connect(server);
// app.use(router);
router(app);

// app.use("/", (req, res) => {
//   res.send("Hola");
// });

server.listen(3200, () => {
  console.log("La aplicacion esta escuchando en http://localhost:3200");
});
