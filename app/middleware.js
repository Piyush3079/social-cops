import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const Authenticate = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    const secret = 'process.env.JWT_SECRET';
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.send({
          status: 403,
          error: true,
          result: 'token either expired or incorrect. Please login again',
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.send({
      error: 'session expired please login or authenticate youself',
    });
  }
};

export default Authenticate;
