const router = require('express').Router();

const memberController = require('../controllers/member');
const auth = require('../utils/auth');

router.get('/commandery', auth, memberController.getCommanderyPage);
router.get('/auxiliary', auth, memberController.getAuxiliaryPage);
router.post('/commandery', auth, memberController.saveDataCommandery);
router.post('/auxiliary', auth, memberController.saveDataAuxiliary);

module.exports = router;
