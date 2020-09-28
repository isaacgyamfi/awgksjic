const router = require('express').Router();

const memberController = require('../controllers/member');

router.get('/commandery', memberController.getCommanderyPage);
router.get('/auxiliary', memberController.getAuxiliaryPage);
router.post('/commandery', memberController.saveDataCommandery);
router.post('/auxiliary', memberController.saveDataAuxiliary);

module.exports = router;
