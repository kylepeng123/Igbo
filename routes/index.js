var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/album1', function(req, res, next) {
    res.render('album1', { title: 'Express' });
});
module.exports = router;
