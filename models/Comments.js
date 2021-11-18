const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  message: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  article: {
    ref: "Articles",
    type: Schema.Types.ObjectId
  },
  date: Date,
  likes: {
    type: Number,
    default: 0,
  },
});

const commentModel = mongoose.model("Comment", commentSchema);

module.exports = commentModel;

/*
j'ai un article avec 1

mon comment

{
    author: 1203193813KOSJ,
    mmessage: "ja'kiffé ce film",
    article: gqjqsk18239?QS
    date: 2020-11-12,
    likes: 0
}


*/