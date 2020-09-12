const QuestionBank = require("../models/schema");

module.exports.create = function (req, res) {
  //used to store data in database
  let query = req.body.query.trim();
  let topic = req.body.topic.trim();
  let tags = req.body.tag.trim();
  if (tags.length == 0) {
    return res.redirect("back");
  }
  tags = tags.split(",");
  //to remove space form front and back
  tags = tags.map((s) => s.trim());

  //verifying data if it is valid input or not
  if (query.length == 0 || topic.length == 0) {
    return res.redirect("back");
  }
  console.log(tags);

  //creating into the database
  QuestionBank.create(
    {
      query: query,
      topic: topic,
      tags: tags,
    },
    function (err, question) {
      if (err) {
        console.log("error in creating a quesion");
        return;
      }

      return res.redirect("back");
    }
  );
};
