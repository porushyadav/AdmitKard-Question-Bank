const todoList = require("../models/schema");

//exract data from the database
module.exports.home = function (req, res) {
  return res.render("home", {
    page_name: "home",
  });
};
