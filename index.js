import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Connect to the database
mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch((err => {
    console.log(err);
}))

//Middleware
app.use(express.json());

//Routes

import UsersController from './controllers/UsersController.js';
app.get("/users", UsersController.all);
app.post("/users", UsersController.create);

//Start server
app.listen(process.env.PORT);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });


// app.get('/users', (req, res) => {
    
// })

// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// });