import request from 'request';
import chai from 'chai';
import app from '../app/index';

const { expect } = chai;

describe('check session is available', () => {
  it('return status code to be 404', (done) => {
    request
      .get({ url: 'http://localhost:3000/random' }, (err, res) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
  });

  it('return status code to be 404', (done) => {
    request
      .post({ url: 'http://localhost:3000/random' }, (err, res) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
  });
});
