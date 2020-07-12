const db = require('../utils/database');
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
    const password = req.body.password;
    const query = `SELECT * FROM registration WHERE registration.registrationId="${registrationId}" AND registration.password="${password}"`;
    db.query(query, (err, result) => {
      console.log(result);
      if (result[0] === undefined) {
        return res.render('login', {
          path: '/login',
          pageTitle: 'Login',
          message: 'Wrong Registration ID ',
        });
      } else {
        req.session.isLoggedIn = true;
        req.session.registrationId = registrationId;
        res.redirect('/register');
      }
    });
    res.redirect('/register');
  },
};
