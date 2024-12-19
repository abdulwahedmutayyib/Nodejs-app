const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello');
});

describe('GET /', () => {
  let server;
  const port = 3000;

  beforeAll((done) => {
    server = app.listen(port, (err) => {
      if (err) {
        return done(err);
      }
      done();
    });
  });

  afterAll((done) => {
    if (server) {
      server.close(done); // Close the server and call done when it's closed
    } else {
      done();
    }
  });

  it('should respond with 200', async () => {
    const response = await request(`http://localhost:${port}`).get('/');
    expect(response.status).toBe(200);
  });
});
