const fs = require('fs');
const Admin = require('../models/admin');

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
  },
  adminDashboard: (req, res) => {
    res.render('admin-dashboard', {
      path: '/admin/dashboard',
      pageTitle: 'Dashboard',
    });
  },
  adminMembersRegistrationPage: (req, res) => {
    res.render('dashboard/registration', {
      path: '/admin/registration',
      pageTitle: 'Registered | Dashboard',
    });
  },
  displayCommanderyData: (req, res) => {},
  displayAuxiliaryData: (req, res) => {},
};
