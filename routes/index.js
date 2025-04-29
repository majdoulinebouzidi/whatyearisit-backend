var express = require('express');
var router = express.Router();

router.get('/year', function(req, res, next) {
  res.json({
    result: true,
    year: new Date().getFullYear().toString(),
  });
})

module.exports = router;
