import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    content: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    likes: [],
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postsSchema);
export default Post;
