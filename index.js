//Index.js

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.
app.get('/users', (req, res) => {
    
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
}); 