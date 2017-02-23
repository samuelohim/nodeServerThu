const oe = require('express')
router = oe.Router();
mainController = require('./controllers/main.controller');

module.exports = router;

router.get('/', mainController.showHome);