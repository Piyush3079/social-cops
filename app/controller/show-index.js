export const getSession = (session) => {
  let data;
  if (!session) {
    data = {
      form: true,
      msg: 'Enter your credentials to verify your identity',
    };
  } else {
    data = {
      form: false,
    };
  }
  return data;
};

const showIndex = (req, res) => {
  const data = getSession(req.session.isLogin);
  res.render('index', { data });
};

export default showIndex;
