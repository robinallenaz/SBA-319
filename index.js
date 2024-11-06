const express = require('express');

const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//Connect to the database
mongoose.connect(process.env.ATLAS_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch((err => {
    console.log(err);
}))

//Middleware
app.use(express.json());

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