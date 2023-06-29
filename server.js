const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://andriikhomenko:p6eA52VXmsXfG9Zw@users.humxzqk.mongodb.net/reserve?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

const app = require("./app");

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3001);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3001, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
