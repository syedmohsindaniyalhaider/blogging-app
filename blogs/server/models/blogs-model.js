const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let detailSchema = new Schema(
  {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    paragraph: {
      type: String,
    },
    blogImage: {
      type: String,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "comments-model" }],
  },
  {
    collection: "blogs",
  }
);
module.exports = mongoose.model("blogs-model", detailSchema);
