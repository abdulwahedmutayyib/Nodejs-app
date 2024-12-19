const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello');
});

describe('GET /', () => {
  let server;
  const port = 3000;

  beforeAll(async () => {
    server = await new Promise((resolve, reject) => {
      app.listen(port, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  });

  afterAll(async () => {
    if (server) await server.close();
  });

  it('should respond with 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
