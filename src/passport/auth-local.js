const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("../model/models");

passport.serializeUser((usuario, done) => {
    done(null, usuario.id);
});
  
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('signup', new LocalStrategy({
    usernameField: 'user',
    passwordField: 'pass',
    passReqToCallback: true
  }, async (req, user, pass, done) => {
    
    const usuario = await User.findOne({'user': user})
    console.log(req.body);
    if(usuario) {
      return done(null, false, req.flash("signupMessage", "El usuario ya existe."));
    } else {
      let mods = req.body.modulos;
      let nombre = req.body.nombre;
      let apellido = req.body.apellido;
      let grupos = req.body.grupos;
      const newUser = new User();
      newUser.user = user;
      newUser.pass = newUser.encryptPassword(pass);
      newUser.modulos = mods;
      newUser.nombre = nombre;
      newUser.apellido = apellido;  
      newUser.grupos = grupos;
      await newUser.save();
      done(null, newUser, req.flash("signupMessage","El usuario ha sido creado correctamente."));
    }
}));

passport.use("signin", new LocalStrategy({
    usernameField: "user",
    passwordField: "pass",
    passReqToCallback: true
}, async (req, user, pass, done)=>{

    
    const usuario = await User.findOne({user : user});


    if(!usuario){
        return done(null, false, req.flash("singInMessage", "El usuario no existe."));
    }
    if(!usuario.authPass(pass)){

        return done(null, false, req.flash("singInMessage","Contraseña incorrecta."));
    }
    return done(null, usuario);
}));