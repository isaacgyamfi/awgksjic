const fs = require('fs');
module.exports = {
  getAdminLogin: (req, res) => {
    res.render('admin', {
      path: '/admin',
      pageTitle: 'Admin',
      message: '',
    });
  },
  postAdminLogin: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  },
  adminDashboard: (req, res) => {
    res.render('admin-dashboard', {
      path: '/admin-dashboard',
      pageTitle: 'Dashboard',
    });
  },
  displayCommanderyData: (req, res) => {
    // let query = 'SELECT * FROM commandery ORDER BY id ASC';
    // console.log(req.session);
    // db.query(query, (err, result) => {
    //   if (err) {
    //     res.redirect('/admin-dashboard');
    //   }
    //   res.render('summary-commandery', {
    //     pageTitle: 'Summary of Commandery data',
    //     path: '/summary-commandery',
    //     members: result,
    //   });
    // });
  },
  displayAuxiliaryData: (req, res) => {
    // let query = 'SELECT * FROM auxiliary ORDER BY id ASC';
    // db.query(query, (err, result) => {
    //   if (err) {
    //     res.redirect('/admin-dasboard');
    //   }
    //   res.render('summary-auxiliary', {
    //     pageTitle: 'Summary of Auxiliary data',
    //     path: '/summary-auxiliary',
    //     members: result,
    //   });
    // });
  },
};
