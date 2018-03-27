import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const verifyCredentials = (username, password) => {
  let data;
  const uName = 'piyushvijay.1997@gmail.com';
  const uPass = 'random-password';
  const secret = 'process.env.JWT_SECRET';
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
    res.json({
      isAuthenticated: false,
      token: data.token,
      error: true,
      msg: data.msg,
    });
  } else {
    res.json({
      isAuthenticated: true,
      token: `Bearer ${data.token}`,
      error: false,
      msg: 'successfully obtained json token',
    });
  }
};

export default getToken;
