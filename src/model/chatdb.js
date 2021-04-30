const mongoose = require ("mongoose");

let db = require("../libs/db_conn");

const message = new mongoose.Schema({
    user: {type: String},
    message: {type: String},
    fecha: {type: String},
    room: {type: String}
});

const messageModel = db.model("messagemodel", message);

module.exports = messageModel;