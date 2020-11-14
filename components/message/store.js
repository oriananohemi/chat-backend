const db = require("mongoose");
const Model = require("./model");

const uri =
  "mongodb+srv://db_user_pnode:alexander@cluster0.w5af8.mongodb.net/message?retryWrites=true&w=majority";

db.Promise = global.Promise;

db.connect(uri, {
  useNewUrlParser: true,
});

console.log("Db conectada con exito");

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterUser) => {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
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
