const Model = require("./model");

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    Model.find(filter)
      .populate("user")
      .exec((e, populated) => {
        if (e) {
          return reject(e);
        }
        resolve(populated);
      });
  });
};

const updateText = async (id, message) => {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();

  return newMessage;
};

const removeMessage = (id) => {
  return Model.deleteOne({
    _id: id,
  });
};

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
};
