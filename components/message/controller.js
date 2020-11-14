const store = require("./store");

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController], No hay usuario o mensaje");
      return reject("Datos incorrectos");
    } else {
      const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
      };
      store.add(fullMessage);
      return resolve(fullMessage);
    }
  });
};

const getMessages = () => {
  return new Promise((resolver, reject) => {
    resolver(store.list());
  });
};

module.exports = {
  addMessage,
  getMessages,
};
