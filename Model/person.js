const mongoose = require("mongoose");
const { Schema } = mongoose;
const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: [String],
});

const person = mongoose.model("person", personSchema);

module.exports = person;
