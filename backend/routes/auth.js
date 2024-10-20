import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('User registered!');
  } catch (err) {
    res.status(500).send('Error registering user: ' + err.message);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
      const user = await User.findOne({ username });
      if (user && await bcrypt.compare(password, user.password)) {
          return res.status(200).json({ message: 'Login successful' });
      } else {
          return res.status(401).json({ message: 'Invalid username or password' });
      }
  } catch (err) {
      res.status(500).json({ message: 'Error logging in', error: err.message });
  }
});



export default router;
