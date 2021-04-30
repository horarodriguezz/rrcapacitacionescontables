// express app
const express = require("express");
const router = express.Router();
const passport = require("passport");
const nodemailer = require("nodemailer");
require("dotenv").config();
const groupModel = require("../model/groups");
const userModel = require("../model/models");
//Indice modulos
let modulo;

//Pagina principal
router.get("/", (req,res)=>{
    res.render("index");
});

//Formulario del mail
router.post("/send-email",(req, res)=>{
    const {nombre, apellido, email, msj} = req.body;

    contentHTML = `
    Mensaje del sitio web:

    Nombre: ${nombre} ${apellido}.
    Dirección: ${email}
    
    Mensaje: ${msj}
    `;

    const transporter = nodemailer.createTransport({
         host:"smtp.gmail.com",
         post: 465,
         secure: true,
         auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
         }
    });
    
    const mailOptions = {
        from: "Capacitaciones Contables",
        to: process.env.MAIL_TO,
        subject: "Mensaje del sitio web",
        text: contentHTML
    }
    
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log("El mensaje no ha sido enviado ",err);
            req.flash("mailSendedMessage","Ha ocurrido un error. No se ha enviado el mensaje.");
            res.redirect("/#contacto");
        }
        console.log("El mensaje ha sido enviado correctamente ",info.messageId);
        
    })
    
    req.flash("mailSendedMessage","El mensaje se ha enviado correctamente. Te responderemos a la brevedad. Gracias!");
    res.redirect("/#contacto");

});

//Rutas hacia los modulos
router.get("/inicial",(req,res)=>{
    req.flash("modulo","inicial");
    res.redirect("/modulos");
});
router.get("/avanzado",(req,res)=>{
    req.flash("modulo","avanzado");
    res.redirect("/modulos");
});
router.get("/sueldos",(req,res)=>{
    req.flash("modulo","sueldos");
    res.redirect("/modulos");
});
router.get("/contabilidad",(req,res)=>{
    req.flash("modulo","contabilidad");
    res.redirect("/modulos");
});
router.get("/modulos", (req,res)=>{
    res.render("modulos");
})
router.get("/modsMobile",(req,res)=>{
    res.render("modsMobile")
});
//Login
router.get("/login", (req,res)=>{
    res.render("login")
});


//Dashboard
router.get("/session",isAuthenticated,(req,res)=>{
    res.render("session")
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

//Log in y Sing up
router.post("/login", passport.authenticate("signin",{
    successRedirect: "/session",
    failureRedirect: "/login",
    failureFlash: true
}));

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

//Groups
router.get("/grupos", async (req,res)=>{
    await groupModel.find({}, (err, groups)=>{
        if(err) console.log(err);
        else{
            res.render("groups",{groups: groups}); 
        }   
    });
});

router.post("/addgroup",async (req, res)=>{

    const group = await groupModel.findOne({grupo: req.body.grupo});
    const horacio = await userModel.findOne({user: "horarodriguezz"});
    const yesica = await userModel.findOne({user: "ybolaño"});
    const esteban = await userModel.findOne({user: "erodriguezr"});

    if(group){
        req.flash("groupMessage","El nombre de ese grupo ya existe.");
        res.redirect("/grupos");
        return;
    } 

    const newGroup = new groupModel();
    newGroup.grupo = req.body.grupo;
    await newGroup.save();
    
    if(horacio){
        horacio.grupos.push(req.body.grupo);
        await horacio.save();
    }
    if(yesica){            
        yesica.grupos.push(req.body.grupo);
        await yesica.save();
    }
    if(esteban){
        esteban.grupos.push(req.body.grupo);
        await esteban.save();
    }



    req.flash("groupMessage","El grupo se ha creado exitosamente.");
    res.redirect("/grupos");
});

router.post("/removegroup",async (req,res)=>{
    const grupo = req.body.grupo;

    await groupModel.findOneAndDelete({grupo: grupo});

    const usuarios = await userModel.find({grupos: grupo});

    usuarios.forEach(async usuario => {
        let index = usuario.grupos.indexOf(grupo);

        if(index != -1){
            usuario.grupos.splice(index,1);
            await usuario.save();
        }
        
    });


    res.redirect("/grupos");
});

router.get("/getgroups", async (req,res)=>{
    const grupos = await groupModel.find({});

    res.send(grupos);    
});

//Ruta hacia el chat
router.post("/chatroom", (req,res)=>{

    res.render("chatroom",{
        room: req.body.room
    });
});

module.exports = router;
