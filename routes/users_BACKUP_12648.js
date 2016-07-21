var express = require('express');
var router = express.Router();
var low = require('lowdb');

var db = low('db.json');


/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
   res.render('users', { title: 'Community Web App (admin for mobile)' });
});
<<<<<<< HEAD
router.get('/register', function(req, res, next) {
 // res.send('respond with a resource');
   res.render('register', { title: 'Community Web App (admin for mobile)' });
});
router.post("/register", function(req, res) {
  // db('users').push(req.body);
      if(!Object.keys(req.body).length) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send({"status": "success"});
    }
});

=======
/* GET users listing. */
router.post('/submitNotice', function(req, res, next) {
  res.send('form submitted');
  console.log(req.body);
  // res.render('users', { title: 'Community Web App (admin for mobile)' });
});
>>>>>>> 9cb7d47e9b84aee68b7abab266aa9c3ced46d198

module.exports = router;
