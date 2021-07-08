const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./DB/connectDB");
const { find } = require("./Model/person");
const person = require("./Model/person");

connectDB();

/* Create Many Records with model.create()
const add = () => {
  person.insertMany(
    [
      { name: "salim", age: 27 },
      { name: "houssem", age: 29, favoriteFoods: ["pizza", "hamburger"] },
      { name: "rostem", favoriteFoods: ["hamburger"] },
    ],
    (err) => {
      err
        ? console.log("failed to creat person", err)
        : console.log("added to database");
    }
  );
};
add();
*/

/* Use model.find() to Search Your Database
const find = () => {
  person.find({}, (err, data) => {
    err ? console.log("error", err) : console.log(data);
  });
};
find();
*/

/*Use model.findOne() to Return a Single Matching Document from Your Database
const find = () => {
  person.findOne({ favoriteFoods: ["hamburger"] }, (err, data) => {
    err ? console.log("error", err) : console.log(data);
  });
};
find();
*/

/*Use model.findById() to Search Your Database By _id
const findbyid = () => {
  person.findById("60e6ffada730fd3c44a8f8bd", (err, data) => {
    err ? console.log("error", err) : console.log(data);
  });
};
findbyid();
*/

/* Perform Classic Updates by Running Find, Edit, then Save
const findupdate = () => {
  person.findByIdAndUpdate(
    "60e6ffada730fd3c44a8f8bd",
    { favoriteFoods: [""] },
    (err, data) => {
      err ? console.log("error", err) : console.log(data);
    }
  );
};
findupdate();
*/

/*Perform New Updates on a Document Using model.findOneAndUpdate()
const query = { name: "rostem" };
const findoneupdate = () => {
  person.findOneAndUpdate(query, { $set: { age: 20 } }, (err, data) => {
    err ? console.log("error", err) : console.log(data);
  });
};
findoneupdate();
*/

/*Delete One Document Using model.findByIdAndRemove
const user_id = "60e6ffada730fd3c44a8f8bf";
const deletedoc = () => {
  person.findByIdAndRemove(user_id, (err, data) => {
    err ? console.log("error", err) : console.log(data);
  });
};
deletedoc();
*/

const deletemany = () => {
  person.romove({ name: "Mary" });
};
deletemany.detledCount;

app.listen(port, (err) => {
  err
    ? console.log("error", err)
    : console.log("server is runnig on port 3000");
});
