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
  // list.push(message);
  myMessage.save();
};

const getMessages = async () => {
  // return list;
  const messages = await Model.find();
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

module.exports = {
  add: addMessage,
  list: getMessages,
  // get
  updateText: updateText,
  // delete
};
