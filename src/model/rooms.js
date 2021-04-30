const mongoose = require ("mongoose");
let db = require("../libs/db_conn");

const userRoom = new mongoose.Schema({
    id: {type: String},
    user: {type: String},
    room: {type: String}
});

const sessionModel = db.model("sessionModel",userRoom);

module.exports = sessionModel;