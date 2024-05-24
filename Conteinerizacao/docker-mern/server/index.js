const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect('mongodb://db:27017/docker-mern', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello, Docker Compose with MERN!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
