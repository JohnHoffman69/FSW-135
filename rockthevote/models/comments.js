const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  }, 
});

module.exports = mongoose.model("Comments", commentSchema);