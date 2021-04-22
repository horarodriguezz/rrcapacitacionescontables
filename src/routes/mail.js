const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/send-email",(req, res, next)=>{
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
        }
        console.log("El mensaje ha sido enviado correctamente ",info.messageId);
        
    })

    next();

},(req, res, next)=>{
    res.render("index");
    return req.flash("mailSendedMessage","El mensaje ha sido enviado.");

});


module.exports = router;