import 'dotenv/config'
// Require connection file to connect
import mongoose from 'mongoose';

await mongoose.connect(process.env.ATLAS_URI)
// Require Models for delete and create operations
import Post from '../models/Post.js';
import User from '../models/UserModels.js';
import Comment from './models/Comments.js';

async function populateCollections() {
  // Create sample users
  const users = [
    { name: 'John Doe', email: 'john.doe@example.com', password: 'password123' },
    { name: 'Jane Doe', email: 'jane.doe@example.com', password: 'password123' },
    { name: 'Bob Smith', email: 'bob.smith@example.com', password: 'password123' },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', password: 'password123' },
    { name: 'Mike Brown', email: 'mike.brown@example.com', password: 'password123' }
  ];

  await User.create(users);

  // Create sample posts
  const posts = [
    { title: 'Post 1', text: 'This is the first post.', userId: (await User.findOne({ email: 'john.doe@example.com' }))._id },
    { title: 'Post 2', text: 'This is the second post.', userId: (await User.findOne({ email: 'jane.doe@example.com' }))._id },
    { title: 'Post 3', text: 'This is the third post.', userId: (await User.findOne({ email: 'bob.smith@example.com' }))._id },
    { title: 'Post 4', text: 'This is the fourth post.', userId: (await User.findOne({ email: 'alice.johnson@example.com' }))._id },
    { title: 'Post 5', text: 'This is the fifth post.', userId: (await User.findOne({ email: 'mike.brown@example.com' }))._id }
  ];

  await Post.create(posts);

  // Create sample comments
  const comments = [
    { text: 'This is a comment on post 1.', postId: (await Post.findOne({ title: 'Post 1' }))._id, userId: (await User.findOne({ email: 'john.doe@example.com' }))._id },
    { text: 'This is a comment on post 2.', postId: (await Post.findOne({ title: 'Post 2' }))._id, userId: (await User.findOne({ email: 'jane.doe@example.com' }))._id },
    { text: 'This is a comment on post 3.', postId: (await Post.findOne({ title: 'Post 3' }))._id, userId: (await User.findOne({ email: 'bob.smith@example.com' }))._id },
    { text: 'This is a comment on post 4.', postId: (await Post.findOne({ title: 'Post 4' }))._id, userId: (await User.findOne({ email: 'alice.johnson@example.com' }))._id },
    { text: 'This is a comment on post 5.', postId: (await Post.findOne({ title: 'Post 5' }))._id, userId: (await User.findOne({ email: 'mike.brown@example.com' }))._id }
  ];

  await Comment.create(comments);
}

populateCollections();

  try {
    const users = [
      {
        email: 'jane.smith@email.com',
        password: 'securepassword123', // Use stronger passwords in real applications
        username: 'janethedeveloper',
        name: "Jane Smith",
        userId: 1,
        hobby: "Coding"
      },
      {
        email: 'michael.lee@company.com',
        password: 'anotherStrongPassword', 
        username: 'mleeman',
        name: "Michael Lee",
        userId: 2,
        hobby: "Gaming"
      },
    ];
    // Rest of your code using the users array
  } catch (error) {
    // Handle any errors that might occur
    console.error(error);
  }


  await Post.deleteMany({});
  await User.deleteMany({});

  const createdUsers = await User.create(users);

  console.log('Users: ', createdUsers);


  const posts = [
    {
      title: 'Star Wars',
      content: 'its really cool',
      userId: createdUsers[2]._id
    },
    {
      title: 'MongoDB',
      content: 'its a database',
      userId: createdUsers[0]._id
    },
    {
      title: 'Dogs are Cool',
      content: 'Do i really need to explain??',
      userId: createdUsers[1]._id
    },
  ];

  const createdPosts = await Post.create(posts);

  console.log('Posts: ', createdPosts);

} catch (err) {
  console.log(err);
} finally {
  await mongoose.connection.close();
}