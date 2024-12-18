// app.js
const express = require('express');
const app = express(); 

// ... your app routes and middleware here ...

module.exports = app; 
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
