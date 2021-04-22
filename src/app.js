const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");
const engine =  require("ejs-mate");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");


//Initializations
require('./model/models');
require('./passport/auth-local');
const io = require("socket.io")(server);
require('./socketio/chat')(io);
//settings
app.set("port", process.env.PORT || 3000);
app.set("views",path.join(__dirname, "views"));
app.engine("ejs",engine);
app.set("view engine", "ejs");


//middlewares

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next)=>{
    app.locals.mailSendedMessage = req.flash("mailSendedMessage");
    app.locals.singInMessage = req.flash("singInMessage");
    app.locals.signupMessage = req.flash("signupMessage");
    app.locals.user = req.user;

    next();
});


//routes
app.use('/', require('./routes/index'));
app.use(require("./routes/mail"));
app.use(express.static(path.join(__dirname,"public")));



//Iniciando server
server.listen(app.get("port"), ()=>{
    console.log("Server on port: ", app.get("port"));
});


