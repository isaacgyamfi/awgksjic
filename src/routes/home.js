const router = require('express').Router();
const homeController = require('../controllers/home');
const auth = require('../utils/auth');
router.get('/', homeController.getHome);
router.get('/login', homeController.getLogin);
router.post('/login', homeController.postLogin);
router.get('/register', auth, homeController.getHomePage);

module.exports = router;
