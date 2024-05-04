var express = require('express');
var router = express.Router();
const userModel = require("./users");
// const postModel = require("./post");
const passport = require('passport');
const upload = require("./multer");

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/register', function (req, res, next) {
  res.render('register');
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/created',isLoggedIn ,async function (req, res, next) {
  const user = await userModel.findOne({username: req.session.passport.user});
  res.render("created",{user});
});

router.get("/profile", isLoggedIn, async function(req, res,next){
  const user = await userModel.findOne({username: req.session.passport.user});
  res.render("profile",{user});
});

router.post("/fileupload", isLoggedIn, upload.single("image"), async function (req, res, next) {
  const user = await userModel.findOne({username: req.session.passport.user});
  user.profileImage = req.file.filename;
  await user.save();
  res.redirect('/profile');
})

router.post('/register', function (req, res, next) {
  const { username, fullname , email, dob } = req.body;
  const data = new userModel({ fullname, username, email, dob });

  userModel.register(data, req.body.password)
  .then(function(){
   passport.authenticate("local") (req,res, function(){
    res.redirect("/profile");
   })
 })
});


router.post('/login', passport.authenticate("local", {
   successRedirect: "/profile",
   failureRedirect: "/"
}) ,function (req, res, next) {});

router.get('/logout', function (req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect("/");
}

module.exports = router;