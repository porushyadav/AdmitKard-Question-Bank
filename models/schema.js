const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    query: {
      type: String,
      require: true,
    },
    topic: {
      type: String,
      require: true,
    },
    tags: {
      type: [],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuestionBank = mongoose.model("QuestionBank", Schema);
module.exports = QuestionBank;
