//Datos de la sesion
const user = document.getElementById("user");
const room = document.getElementById("room");
//Elementos del chat
const chatBox = document.getElementById("chat-box");
const messageForm = document.getElementById("messageForm");
const message = document.getElementById("message");
const goBack = document.getElementById("goBack");

goBack.addEventListener("click",()=>{
    location.href = "/session";
})
const socket = io();

socket.emit("joinRoom",{user: user.innerText, room: room.innerText});

socket.on("load old messages", data =>{
    for (let i = 0; i < data.length; i++) {
        displayMessage(data[i]);
        console.log(data[i]);
    }
});

socket.on("userJoin", (data)=>{
    displayMessage(data);
});

messageForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(message.value != ""){
        socket.emit("sendMessage", {user: user.innerText, message: message.value});
    }
    message.value = "";
    message.focus();
});

socket.on("newMessage",(data)=>{
    displayMessage(data);
});


function displayMessage(data){
    const msj = document.createElement("div");
    msj.classList.add("rounded", "my-1", "px-1", "msj","animate");

    if(data.user == user.innerText){
        msj.classList.add("ms-auto","msjAdmin");
    }
    if(data.user == "RR Capacitaciones Contables Bot"){
        msj.classList.add("msjBot");
    }    
    if(data.user == "horarodriguezz" || data.user == "ybolaño" || data.user == "erodriguezr"){
        msj.innerHTML = `
        <div class="d-flex" style="overflow-x: hidden;">
        <p class="m-0 flex-grow-1"><strong>${data.user}</strong> <i class="fas fa-check-circle"></i></p>
        <p class="m-0 text-muted fs-6">${data.fecha}</p>
        </div>
        <p class="m-0">${data.message}</p>`;

        
    }else{
        msj.innerHTML = `
        <div class="d-flex" style="overflow-x: hidden;">
        <p class="m-0 flex-grow-1"><strong>${data.user}</strong></p>
        <p class="m-0 text-muted fs-6">${data.fecha}</p>
        </div>
        <p class="m-0">${data.message}</p>`;
        
    }
    
    
    chatBox.appendChild(msj);
    chatBox.scrollTop = chatBox.scrollHeight;
}