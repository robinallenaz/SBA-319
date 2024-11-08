let express = require('express');
let router = express.Router();
let UserController = require('../controllers/UsersController.js');


router.get('/', async (req, res) => {
  try {
    const users = await UserController.all();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving users' });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await UserController.create(req.body);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;