const router = require('express').Router();
const homeController = require('../controllers/home');

router.get('/', homeController.getHome);
router.get('/register', homeController.getLogin);
router.post('/register', homeController.postLogin);
router.get('/history', homeController.getHistory);
router.get('/regiment', homeController.getRegiment);

module.exports = router;
