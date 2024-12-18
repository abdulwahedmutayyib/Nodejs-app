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
  console.error(err.stack); // Log the error for debugging
  res.status(500).send('Internal Server Error'); 
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// app.test.js
const request = require('supertest');
const app = require('./app'); // Corrected import path

describe('GET /', () => {
  it('should respond with 200 and a message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from Node.js!');
  });

  it('should handle 404 Not Found', async () => {
    const response = await request(app).get('/not-found');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not Found');
  });

  it('should handle internal server errors', async () => {
    // Simulate an error (e.g., by triggering an uncaught exception)
    const originalSend = app._router.stack[0].handle; 
    app._router.stack[0].handle = (req, res) => {
      throw new Error('Simulated Internal Server Error'); 
    };

    try {
      const response = await request(app).get('/'); 
    } catch (error) {
      // Expect the error to be thrown
      expect(error).toBeDefined(); 
    } finally {
      // Restore the original route handler
      app._router.stack[0].handle = originalSend; 
    }
  });
});
~
~
~
~
~
~
~
~
~
~
~

