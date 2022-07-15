const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  token: String,
});
const books = mongoose.model("User", userSchema);
module.exports = books;
