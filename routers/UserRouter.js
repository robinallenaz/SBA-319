import express from 'express';
import UserController from './UserController.js';

const router = express.Router();

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

export default router;