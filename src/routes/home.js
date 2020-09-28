const router = require('express').Router();
const homeController = require('../controllers/home');

router.get('/', homeController.getHome);
router.get('/login', homeController.getLogin);
router.post('/login', homeController.postLogin);

module.exports = router;
