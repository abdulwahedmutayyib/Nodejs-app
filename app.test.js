const request = require('supertest');
const app = require('./app'); // Assuming app.js initializes and exports the server

describe('GET /', () => {
  let server;
  const port = process.env.PORT || 3000; // Use environment variable or default port

  beforeAll(async () => {
    server = await new Promise((resolve, reject) => {
      app.listen(port, (err) => {
        if (err) {
          console.error('Error starting server:', err);
          reject(err);
        } else {
          console.log(`Server listening on port ${port}`);
          resolve();
        }
      });
    });
  });

  afterAll(async () => { 
    // Use async/await for proper handling of server.close()
    if (server) {
      await server.close(); 
    }
  });

  it('should respond with 200 and a message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from Node.js!'); 
  });
});
