const QuestionBank = require("../models/schema");


//used for showing the views
module.exports.views = function (req, res) {
  QuestionBank.find({}, function (err, questions) {
    return res.render("views", {
      title: "views",
      Question_bank: questions,
      page_name: "views",
    });
  });
};

//used to delete the question
module.exports.delete = function (req, res) {
  QuestionBank.findByIdAndDelete(req.query.id, function (err) {
    if (err) {
      console.log("deleting error");
      return;
    }
    return res.redirect("back");
  });
};


//used for searching
module.exports.search = async function (req, res) {
  try {
    //searching based on the query
    let questions = await QuestionBank.find({ query: req.body.search });
    console.log(questions);
    //if question.length is zero means not found
    if (questions.length === 0) {
      //searching based on the tags
      questions = await QuestionBank.find({ tags: req.body.search });
    }
    return res.render("views", {
      title: "views",
      Question_bank: questions,
      page_name: "views",
    });

    
  } catch (err) {
    console.log("not found");
    return res.redirect("back");
  }
};
