const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World... Docker & Jenkins');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);