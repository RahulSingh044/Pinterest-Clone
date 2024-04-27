var express = require('express');
var router = express.Router();
const userModel = require("./users");
// const postModel = require("./post");
var passport = require('passport');

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/register', function (req, res, next) {
  res.render('register');
});

// router.post('/register', function (req, res, next) {
//   const data = new userModel({

//   })
// });

module.exports = router;