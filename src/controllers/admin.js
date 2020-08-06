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
    res.redirect(200, '/admin-dashboard', {
      pageTitle: '/Dashboard',
      message: '',
      path: '/admin',
    });
  },
  adminDashboard: (req, res) => {
    res.render('admin-dashboard', {
      path: '/admin-dashboard',
      pageTitle: 'Dashboard',
    });
  },
  displayCommanderyData: (req, res) => {},
  displayAuxiliaryData: (req, res) => {},
};
