const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let commentsSchema = new Schema(
  {
    blogId: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  {
    collection: "blog-comments",
  }
);
module.exports = mongoose.model("comments-model", commentsSchema);
