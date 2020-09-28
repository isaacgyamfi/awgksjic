const fs = require('fs');
<<<<<<< HEAD
const Admin = require('../models/admin');

=======
const db = require('../utils/database');
>>>>>>> a1f782a88191e38c3d5f35796de6a3c2e9ef4433
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
<<<<<<< HEAD
    res.redirect(200, '/admin/dashboard', {
      pageTitle: '/Dashboard',
      message: '',
      path: '/admin',
    });
  },
  getAdminSignUp: (req, res) => {
    res.render('admin-signup', {
      path: '/admin/signup',
      message: '',
      pageTitle: 'Create administrator account',
    });
  },
  postAdminSignup: async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const adminMembershipNumber = req.body.adminMembershipNumber;
    const adminMembershipType = req.body.adminMembershipType;
    const position = req.body.position;
    const email = req.body.email;
    const adminPhone = req.body.adminPhone;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    try {
      if (password !== confirmPassword) {
        throw new Error('Password do not match');
      }
      const admin = await Admin.findOne({
        email,
        membershipId: adminMembershipNumber,
      });
    } catch (error) {
      res.status(400).json({ succes: false });
    }

    if (!admin) {
      throw new Error('Admin already exists');
    } else {
    }
=======

    const query = `SELECT * FROM admin WHERE admin.email="${email}" AND admin.password="${password}"`;
    db.query(query, (err, result) => {
      if (result[0] === undefined) {
        return res.render('admin', {
          path: '/admin',
          pageTitle: 'Login as admin',
          message: 'Wrong credential entered!',
        });
      } else {
        req.session.isLoggedIn = true;
        req.session.email = email;
        res.redirect('/admin-dashboard');
      }
    });
>>>>>>> a1f782a88191e38c3d5f35796de6a3c2e9ef4433
  },
  adminDashboard: (req, res) => {
    res.render('admin-dashboard', {
      path: '/admin/dashboard',
      pageTitle: 'Dashboard',
    });
  },
<<<<<<< HEAD
  adminMembersRegistrationPage: (req, res) => {
    res.render('dashboard/registration', {
      path: '/admin/registration',
      pageTitle: 'Registered | Dashboard',
=======
  displayCommanderyData: (req, res) => {
    let query = 'SELECT * FROM commandery ORDER BY id ASC';
    console.log(req.session);
    db.query(query, (err, result) => {
      if (err) {
        res.redirect('/admin-dashboard');
      }
      res.render('summary-commandery', {
        pageTitle: 'Summary of Commandery data',
        path: '/summary-commandery',
        members: result,
      });
    });
  },
  displayAuxiliaryData: (req, res) => {
    let query = 'SELECT * FROM auxiliary ORDER BY id ASC';
    db.query(query, (err, result) => {
      if (err) {
        res.redirect('/admin-dasboard');
      }
      res.render('summary-auxiliary', {
        pageTitle: 'Summary of Auxiliary data',
        path: '/summary-auxiliary',
        members: result,
      });
>>>>>>> a1f782a88191e38c3d5f35796de6a3c2e9ef4433
    });
  },
  displayCommanderyData: (req, res) => {},
  displayAuxiliaryData: (req, res) => {},
};
