var express = require('express');
var router = express.Router();
var controller = require('../controllers')

router.get('/', controller.basicAPI);
router.get('/test', controller.testAPI);
router.post('/post-test', controller.postTestAPI);

module.exports = router;
