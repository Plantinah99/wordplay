const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('./models/User');

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save((err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send('User registered successfully!');
    }
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('Login successful!');
});

module.exports = router;
