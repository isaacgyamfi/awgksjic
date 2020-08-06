const User = require('../models/user');
module.exports = {
  getHomePage: (req, res) => {
    res.render('welcome', {
      path: '/register',
      pageTitle: 'Register',
    });
  },
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
    const email = req.body.email;

    const userExist = User.findOne({ registrationId, email });

    if (!userExist) {
      // check if the user is commandery or auxiliary

      // If commandery

      // else

      return res.render('login', {
        path: '/login',
        pageTitle: 'Login',
        message: 'Wrong Registration ID ',
      });
    } else {
      req.session.isLoggedIn = true;
      req.session.registrationId = registrationId;
      console.log(req.session);
      res.redirect('/register');
    }
  },
};
