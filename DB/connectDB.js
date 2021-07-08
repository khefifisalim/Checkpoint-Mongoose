const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.mongoUrl, { useNewUrlParser: true })
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => console.log("failed to connect to database"));
};

module.exports = connectDB;
