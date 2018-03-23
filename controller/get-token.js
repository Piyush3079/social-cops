import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const getToken = (req, res) => {
  const uName = 'piyushvijay.1997@gmail.com';
  const uPass = process.env.PASSWORD;
  const secret = process.env.JWT_SECRET;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(uPass, salt);
  let data;
  if (uName === req.body.username) {
    if (bcrypt.compareSync(req.body.password, hash)) {
      const user = {
        username: uName,
        role: 'access',
      };
      const token = jwt.sign(user, secret, { expiresIn: '30d' });
      data = {
        form: false,
        token,
      };
    } else {
      data = {
        form: true,
        msg: 'Incorrect username or password entered',
      };
    }
  } else {
    data = {
      form: true,
      msg: 'Incorrect username or password entered',
    };
  }
  res.render('index', { data });
};

export default getToken;
