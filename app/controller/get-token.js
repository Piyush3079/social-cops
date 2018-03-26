import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

export const verifyCredentials = (username, password) => {
  let data;
  const uName = 'piyushvijay.1997@gmail.com';
  const uPass = process.env.PASSWORD;
  const secret = process.env.JWT_SECRET;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(uPass, salt);
  if (uName === username) {
    if (bcrypt.compareSync(password, hash)) {
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
      msg: 'Incorrect username',
    };
  }
  return data;
};

const getToken = (req, res) => {
  const { username, password } = req.body;
  const data = verifyCredentials(username, password, req);
  if (data.form === true) {
    req.session.isLogin = false;
  } else {
    req.session.isLogin = true;
    req.session.token = data.token;
  }
  res.render('index', { data });
};

export default getToken;
