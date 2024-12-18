const app = require('./app'); // Replace with the path to your app file

describe('GET /', () => {
  it('should respond with 200 and a message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from Node.js!'); // Replace with expected response
  });
});
