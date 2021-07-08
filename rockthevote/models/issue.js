const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  subject: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Issue", issueSchema);