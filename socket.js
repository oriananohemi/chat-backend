const socketIO = require("socket.io");
const socket = {};

const connect = () => {
  socket.io = socketIO(server);
};

module.exports = {
  connect,
  socket,
};
