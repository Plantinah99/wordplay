const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Configure passport
require('./auth')(passport);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mathemagics', { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use(routes);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
