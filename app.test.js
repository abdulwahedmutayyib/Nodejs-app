const request = require('supertest');
const app = require('./app');

const port = process.env.PORT || 3000;

describe('GET /', () => {
  let server;

  beforeAll(async () => {
    server = await new Promise((resolve, reject) => {
      app.listen(port, (err) => {
        if (err) {
          reject(err); 
        } else {
          console.log(`Server listening on port ${port}`);
          resolve(app); 
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
