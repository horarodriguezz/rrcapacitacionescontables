const mongoose = require ("mongoose");

let db = require("../libs/db_conn");

const group = new mongoose.Schema({
    grupo: {type: String}
});

const groupModel = db.model("groupModel", group);

module.exports = groupModel;