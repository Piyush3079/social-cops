import request from 'supertest';
import chai from 'chai';
import app from '../index';

const expect = chai.exepct;
console.log(request);
const agent = request.agent(app);

describe('get token', () => {
  it('should return token object', (done) => {
    agent
      .post({
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
        url: 'http://localhost:3000/get_token',
        body: { username: 'piyushvijay.1997@gmail.com', password: 'Piyush@1997' },
      }, (err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    done();
  });
});
