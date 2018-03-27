import request from 'request';
import chai from 'chai';
import app from '../app/index';

const { expect } = chai;

describe('download image', () => {
  it('should download image', (done) => {
    request
      .post({
        url: 'http://localhost:3000/download_file',
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBpeXVzaHZpamF5LjE5OTdAZ21haWwuY29tIiwicm9sZSI6ImFjY2VzcyIsImlhdCI6MTUyMjE1MTc3NywiZXhwIjoxNTI0NzQzNzc3fQ.x7K0fYGmSlXTw0MSATuvlLqLrZULmDs6T-b7YgcDfOA' },
        form: { uri: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg' },
      }, (err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  }).timeout(10000);
});
