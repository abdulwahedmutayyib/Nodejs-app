const request = require('supertest');
const app = require('./app'); 

describe('GET /', () => {
  let server; 

  beforeAll(async () => {
    server = app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  });

  afterAll(() => {
    server.close(); 
  });

  it('should respond with 200 and a message', async () => {
    const response = await request(app).get('/'); 
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from Node.js!');
  });
});
