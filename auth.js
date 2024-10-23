const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

// User model
const User = mongoose.model('User', {
  username: String,
  password: String
});

// Add this method to the User schema
User.schema.methods.verifyPassword = function(password) {
  return this.password === password; // Replace with your password hashing logic
};

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, done) => {
  User.findOne({ username: username }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
    if (!user.verifyPassword(password)) { return done(null, false); }
    return done(null, user);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
