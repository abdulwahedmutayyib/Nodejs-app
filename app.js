onst request = require('supertest');
const app = require('./app'); // Assuming app.js initializes and exports the server

describe('GET /', () => {
  let server;

  beforeAll(async () => {
    server = await new Promise((resolve, reject) => {
      app.listen(port, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(); 
        }
      });
    });
  });

  afterAll(() => {
    if (server) {
      server.close();
    }
  });

  it('should respond with 200 and a message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from Node.js!');
  });
});
