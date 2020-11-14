const Model = require("./model");

const listUsers = () => {
  return Model.find();
};

const addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};

module.exports = {
  add: addUser,
  list: listUsers,
};
