const mongoose = require("mongoose");

//setup the connection to mongoose
mongoose.connect("mongodb://localhost/QuestionBank");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to database");
});
