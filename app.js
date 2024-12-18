const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Define a route handler for the root path ('/')
app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

// Define a route handler for a non-existent path (example)
app.get('/not-found', (req, res) => {
  res.status(404).send('Not Found');
});

// Define a global error handler
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).send('Internal Server Error'); 
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
