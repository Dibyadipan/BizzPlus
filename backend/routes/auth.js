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
    if (!user) {
      console.log('User not found');
      return res.status(401).send('Invalid username or password');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password does not match');
    }
    if (isMatch) {
      res.status(200).send('Login successful!');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (err) {
    res.status(500).send('Error logging in: ' + err.message);
  }
});


export default router;
