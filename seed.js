import 'dotenv/config'
// Require connection file to connect
import mongoose from 'mongoose';

await mongoose.connect(process.env.ATLAS_URI)
// Require Models for delete and create operations
import Post from '../models/Post.js';
import User from '../models/User.js';
  
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