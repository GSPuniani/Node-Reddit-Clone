const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// _id: new mongoose.Types.ObjectId();
// if( !mongoose.Types.ObjectId.isValid(_id) ) return false;


const PostSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true },
  subreddit: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});


module.exports = mongoose.model("Post", PostSchema);