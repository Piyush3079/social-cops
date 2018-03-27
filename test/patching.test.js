import request from 'request';
import chai from 'chai';
import app from '../app/index';

const { expect } = chai;

describe('check patching', () => {
  it('should return updated json', (done) => {
    request
      .patch({
        url: 'http://localhost:3000/add_patch',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBpeXVzaHZpamF5LjE5OTdAZ21haWwuY29tIiwicm9sZSI6ImFjY2VzcyIsImlhdCI6MTUyMjE1MTc3NywiZXhwIjoxNTI0NzQzNzc3fQ.x7K0fYGmSlXTw0MSATuvlLqLrZULmDs6T-b7YgcDfOA',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ obj: { name: 'piyush' }, patch: { op: 'replace', path: '/name', value: 'random' } }),
      }, (err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
