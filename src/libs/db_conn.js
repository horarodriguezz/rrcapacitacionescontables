const mongoose = require("mongoose");
require("dotenv").config();

let conn = mongoose.createConnection(process.env.DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true});

conn.on("error", (err)=>{console.log(err)});
conn.on("open", ()=>{console.log("conected")});
module.exports = conn;



