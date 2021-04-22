const messageModel = require("../model/chatdb");

module.exports = function(io){
    io.on("connection", async socket =>{
        console.log("Nuevo usuario conectado.")

        let oldMessages = await messageModel.find({});
        socket.emit("load old messages", oldMessages)

        socket.on("send message", async (data)=>{
            const newMessage = new messageModel();
            newMessage.user = data.user;
            newMessage.message = data.message;
            newMessage.fecha = data.fecha;

            await newMessage.save();

            io.emit("new message", data);
        });
    });

}