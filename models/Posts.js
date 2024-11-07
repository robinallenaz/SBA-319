import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: String,
    text: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  }, {
    //Compound index
    index: {
      userId: 1,
      title: 1
    }
  });

const Post = mongoose.model('Post', postSchema);

export default Post;