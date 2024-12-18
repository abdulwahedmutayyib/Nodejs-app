const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Graceful server shutdown
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

module.exports = app; // Export app for testing purposes (if needed)
