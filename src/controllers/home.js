module.exports = {
  getHome: (req, res) => {
    res.render('index', {
      path: '/',
      pageTitle: 'Home',
    });
  },
  getLogin: (req, res) => {
    res.render('login', {
      path: '/login',
      pageTitle: 'Login',
      message: '',
    });
  },
  postLogin: (req, res) => {
    const registrationId = req.body.registrationId;
    const password = req.body.password;
    const membershipType = req.body.membershipType;

    if (membershipType == 'Commandery') {
      res.redirect('/commandery');
    } else {
      res.redirect('/auxiliary');
    }
  },
};
