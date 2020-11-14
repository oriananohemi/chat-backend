const store = require("./store");

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController], No hay usuario o mensaje");
      return reject("Datos incorrectos");
    } else {
      const fullMessage = {
        chat: chat,
        user: user,
        message: message,
        date: new Date(),
      };
      store.add(fullMessage);
      return resolve(fullMessage);
    }
  });
};

const getMessages = (filterUser) => {
  return new Promise((resolver, reject) => {
    resolver(store.list(filterUser));
  });
};

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      return reject("Invalid data");
    }

    const result = await store.updateText(id, message);

    return resolve(result);
  });
};

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject("Id invalido");
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
};

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
