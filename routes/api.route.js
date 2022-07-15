const {
  addBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
  discount,
} = require("../controllers/book");

const router = require("express").Router();

router.route("/addBook").post(addBook);
router.route("/getBooks").get(getBooks);
router.route("/getBookById/:id").get(getBookById);
router.route("/updateBookById/:id").put(updateBookById);
router.route("/deleteBookById/:id").delete(deleteBookById);
router.route("/discount").post(discount);
module.exports = router;
