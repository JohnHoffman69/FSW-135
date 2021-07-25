const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
  usersVoted: [{
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"    
    }
  }]
});


module.exports = mongoose.model("Issue", issueSchema);