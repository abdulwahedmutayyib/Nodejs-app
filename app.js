const express = require('express');

const app = express();

// Define a route for the root path ('/') using the GET method
app.get('/', (req, res) => {
  res.send('Hello from Node.js!'); 
});

// ... other routes and middleware ...

module.exports = app; 
