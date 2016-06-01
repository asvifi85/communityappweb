var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
   res.render('users', { title: 'Community Web App (admin for mobile)' });
});
/* GET users listing. */
router.post('/submitNotice', function(req, res, next) {
  res.send('form submitted');
  console.log(req.body);
  // res.render('users', { title: 'Community Web App (admin for mobile)' });
});

module.exports = router;
