const showIndex = (req, res) => {
  let data;
  if (!req.session) {
    data = {
      form: true,
      msg: 'Enter your credentials to verrify your identity',
    };
  } else {
    data = {
      form: false,
    };
  }
  res.render('index', { data });
};

export default showIndex;
