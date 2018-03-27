import jwt from 'jsonwebtoken';

const Authenticate = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    const secret = 'process.env.JWT_SECRET';
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(403);
        res.json({
          error: true,
          msg: 'token either expired or incorrect. Please login again',
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401);
    res.json({
      error: true,
      msg: 'session expired please login or authenticate youself',
    });
  }
};

export default Authenticate;
