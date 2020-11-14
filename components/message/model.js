const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "user",
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model("message", mySchema);

module.exports = model;
