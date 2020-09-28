const router = require('express').Router();
const adminController = require('../controllers/admin');
const auth = require('../utils/auth');

router.get('/admin', adminController.getAdminLogin);
router.post('/admin', adminController.postAdminLogin);
router.get('/admin/signup', adminController.getAdminSignUp);
router.get('/admin/dashboard', adminController.adminDashboard);
router.get('/admin/registration', adminController.adminMembersRegistrationPage);
router.get('/summary-commandery', adminController.displayCommanderyData);
router.get('/summary-auxiliary', adminController.displayAuxiliaryData);

module.exports = router;
