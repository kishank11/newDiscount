const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  title: String,
  image: String,
  author: String,
  dateOfPublication: Date,
  chapters: Array,
  price: Number,
});
const books = mongoose.model("Book", bookSchema);
module.exports = books;
