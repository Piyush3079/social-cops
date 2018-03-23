import request from 'request';
import assert from 'assert';

const baseUrl = 'http://localhost:3000';

describe('homepage', () => {
  it('eturn status code to be 200', (done) => {
    request
      .get(baseUrl, (err, res) => {
        assert.equal(200, res.statusCode);
        done();
      });
  });
});
