const mongoose = require ("mongoose");
const bcrypt = require("bcrypt");



let db = require("../libs/db_conn");

const user = new mongoose.Schema({
    user: {type: String, required: true, unique: true},
    pass: {type: String, required: true},
    modulos: {type: String},
    nombre: {type: String},
    apellido: {type: String}
});

user.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

user.methods.authPass = function(password){

    return bcrypt.compareSync(password, this.pass);
};



const userModel = db.model("userModel", user);


module.exports = userModel;