import request from 'request';
import chai from 'chai';
import app from '../app/index';

const { expect } = chai;

describe('check middleware', () => {
  it('should not have token', (done) => {
    request
      .post({
        url: 'http://localhost:3000/download_file',
        form: { uri: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg' },
      }, (err, res) => {
        expect(res.statusCode).to.equal(401);
        done();
      });
  });

  it('should have incorrect token', (done) => {
    request
      .post({
        url: 'http://localhost:3000/download_file',
        headers: { Authorization: 'Bearer eyJhbGciUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBpeXVzaHZpamF5LjE5OTdAZ21haWwuY29tIiwicm9sZSI6ImFjY2VzcyIsImlhdCI6MTUyMjE1MTc3NywiZXhwIjoxNTI0NzQzNzc3fQ.x7K0fYGmSlXTw0MSATuvlLqLrZULmDs6T-b7YgcDfOA' },
        form: { uri: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg' },
      }, (err, res) => {
        expect(res.statusCode).to.equal(403);
        done();
      });
  });
});
