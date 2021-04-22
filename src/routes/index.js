// express app
const express = require("express");
const router = express.Router();
const passport = require("passport");



router.get("/", (req,res)=>{
    res.render("index");
});

router.get("/login", (req,res)=>{
    res.render("login")
});

router.post("/login", passport.authenticate("signin",{
    successRedirect: "/session",
    failureRedirect: "/login",
    failureFlash: true
}));

router.get("/session",isAuthenticated,(req,res)=>{
    res.render("session")
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

router.get("/adduser",(req,res)=>{
    res.render("adduser");
});

router.post("/adduser", passport.authenticate("signup",{
    successRedirect: "/login",
    failureRedirect: "/adduser",
    failureFlash: true
}))

function isAuthenticated(req, res, next) {

    if(req.isAuthenticated()){
      return next();
    }
  
    res.redirect('/')
}

module.exports = router;
