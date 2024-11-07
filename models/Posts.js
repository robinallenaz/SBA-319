import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return value.length > 0;
        },
        message: 'Title cannot be empty'
      }
    },
    text: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return value.length > 0;
        },
        message: 'Text cannot be empty'
      }
    },
    // ...
  });

const Post = mongoose.model('Post', postSchema);

export default Post;