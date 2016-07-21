var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Community Web App (admin for mobile)' });
});
router.post("/postcall", function(req, res) {
    if(!Object.keys(req.body).length) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send({"status": "success"});
    }
});
module.exports = router;
