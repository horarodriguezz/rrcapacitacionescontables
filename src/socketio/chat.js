const messageModel = require("../model/chatdb");
const rooms = require("../model/rooms");
const moment = require("moment");



module.exports = function(io){
    io.on("connection", async (socket) =>{

        socket.on("joinRoom", async (data) =>{
            const userjoin = new rooms();
            userjoin.id = socket.id;
            userjoin.user = data.user;
            userjoin.room = data.room;

            await userjoin.save();

            socket.join(userjoin.room);

            const oldMessages = await messageModel.find({room: userjoin.room});

            socket.emit("load old messages", oldMessages);

            socket.emit("userJoin",{user: "RR Capacitaciones Contables Bot", message:`Te has unido a la sala de ${userjoin.room}`, fecha: moment().format("HH:MM A") });
        });

        socket.on("sendMessage",async(data)=>{
            const session = await rooms.findOne({id: socket.id});
            const newMessage = new messageModel();

            newMessage.user = data.user;
            newMessage.message = data.message;
            newMessage.room = session.room;
            newMessage.fecha = moment().utcOffset(-140).format("HH:MM A");

            await newMessage.save();

            io.to(session.room).emit("newMessage", newMessage);
        });

        socket.on("disconnect",async ()=>{
            await rooms.findOneAndDelete({id: socket.id});
        });
    });
}