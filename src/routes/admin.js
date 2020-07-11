const router = require('express').Router();
const adminController = require('../controllers/admin');
const auth = require('../utils/auth');

router.get('/admin', adminController.getAdminLogin);
router.post('/admin', adminController.postAdminLogin);
router.get('/admin-dashboard', auth, adminController.adminDashboard);
router.get('/summary-commandery', auth, adminController.displayCommanderyData);
router.get('/summary-auxiliary', auth, adminController.displayAuxiliaryData);

module.exports = router;
