const bookModel = require("../model/Book");
const addBook = async (req, res) => {
  try {
    const { title, image, author, dateOfPublication, chapters, price } =
      req.body;

    const client = await bookModel.create({
      title,
      image,
      author,
      dateOfPublication,
      chapters,
      price,
    });
    if (client) {
      res.status(200).json(client);
      const result = client.toJSON();
      console.log(result);
    }
  } catch (error) {
    res.json(error.message);
  }
};

const updateBookById = async (req, res) => {
  await bookModel
    .updateOne(
      { _id: req.params.id },
      {
        title: req.body.title,
        image: req.body.image,
        author: req.body.author,
        dateOfPublication: req.body.dateOfPublication,
        chapters: req.body.chapters,
        price: req.body.price,
      }
    )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};

const deleteBookById = async (req, res) => {
  await bookModel
    .deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};
const getBooks = async (req, res) => {
  await bookModel
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};
const getBookById = async (req, res) => {
  await bookModel
    .find({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};
const discount = async (req, res) => {
  const { discount } = req.body;
  if (discount == "FIRSTBOOK") {
    const result = await bookModel.updateMany({ price: price * 0.3 });

    res.json(result);
  }
};

module.exports = {
  getBookById,
  getBooks,
  addBook,
  updateBookById,
  deleteBookById,
  discount,
};
