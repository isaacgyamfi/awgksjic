const User = require('../models/user');

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
    const membershipId = req.body.membershipId;
    const membershipType = req.body.membershipType;
    const email = req.body.email;

    const user = User.findOne({ membershipId, email, membershipType });

    if (user) {
      req.session.isLoggedIn = true;
      req.session.membershipId = membershipId;
      console.log(req.session);
      res.redirect('/register');
    } else {
      return res.render('login', {
        path: '/login',
        pageTitle: 'Login',
        message: 'Wrong Registration ID ',
      });
    }
  },
};
