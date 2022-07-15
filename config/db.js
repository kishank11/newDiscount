const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/kishanassign")
  .then(() => {
    console.log("DB SUCCESS");
  })
  .catch((err) => {
    console.log(err);
  });
