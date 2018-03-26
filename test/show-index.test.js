import request from 'request';
import chai from 'chai';
import app from '../app/index';
import { getSession } from '../app/controller/show-index';

const { expect } = chai;

describe('check session is available', () => {
  it('should return form', (done) => {
    expect(getSession(true).form).to.be.equal(false);
    done();
  });

  it('should not return form', (done) => {
    expect(getSession(false).form).to.be.equal(true);
    expect(getSession(false).msg).to.be.equal('Enter your credentials to verify your identity');
    done();
  });

  it('return status code to be 200', (done) => {
    request
      .get({ url: 'http://localhost:3000' }, (err, res) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });
});
