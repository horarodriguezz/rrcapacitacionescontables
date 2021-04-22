const d = document, w = window;

//Elementos del DOM
//Home
const homeMobile = d.getElementById("homeMobile");
const home = d.getElementById("home");
const contenido = d.getElementById("contenido");
//Chat
const forum = d.getElementById("forum");
const forumMobile = d.getElementById("forumMobile");
const chat = d.getElementById("chat");
const chatBox = d.getElementById("chat-box");
const messageForm = d.getElementById("messageForm");
const message = d.getElementById("message");
let user = d.getElementById("user");
//Modulos
    //Botones de los navs
    const modulos = d.getElementById("modulos");
    const modsMobile = d.getElementById("modsMobile");
    //lista de modulos
    const dropdownMobile = d.getElementById("dropdownMobile");
    const dropdown = d.getElementById("dropdown");
    // botones de los modulos
    const ini = d.querySelectorAll(".ini");
    const avan = d.querySelectorAll(".avan");
    const cont = d.querySelectorAll(".cont");
    const sueldos = d.querySelectorAll(".sueldos");
    //modulos
    const mod1 = d.getElementById("mod1");
    const mod1lg = d.getElementById("mod1lg")
    const modx = d.getElementById("modx");
//Logout
const out = d.getElementById("out");
const outMobile = d.getElementById("outMobile");





//seccion Home
homeMobile.addEventListener("click", ()=>{
    modsMobile.classList.remove("active");
    modulos.classList.remove("active");
    homeMobile.classList.add("active");
    home.classList.add("active");
    forumMobile.classList.remove("active");
    forum.classList.remove("active");


    contenidoLg.classList.remove("d-none");
    dropdownMobile.classList.add("d-none");
    chat.classList.add("d-none");
    mod1lg.classList.add("d-none");
    modx.classList.add("d-none");
});

home.addEventListener("click", ()=>{
    modsMobile.classList.remove("active");
    modulos.classList.remove("active");
    homeMobile.classList.add("active");
    home.classList.add("active");
    forumMobile.classList.remove("active");
    forum.classList.remove("active");

    chat.classList.add("d-none");
    mod1lg.classList.add("d-none");
    modx.classList.add("d-none");
    contenidoLg.classList.remove("d-none");
});
//seccion modulos
modsMobile.addEventListener("click", ()=>{
    modsMobile.classList.add("active");
    homeMobile.classList.remove("active");
    home.classList.remove("active");
    forumMobile.classList.remove("active");
    forum.classList.remove("active");

    contenidoLg.classList.add("d-none");
    dropdownMobile.classList.remove("d-none");
    chat.classList.add("d-none");
    mod1lg.classList.add("d-none");
    modx.classList.add("d-none");
});

ini.forEach(btn => {
    btn.addEventListener("click",()=>{
        modsMobile.classList.add("active");
        homeMobile.classList.remove("active");
        home.classList.remove("active");
        forumMobile.classList.remove("active");
        forum.classList.remove("active");
        
        dropdownMobile.classList.add("d-none");
        contenidoLg.classList.add("d-none");
        chat.classList.add("d-none");

        mod1lg.classList.remove("d-none");
        modx.classList.add("d-none");
    });
});

avan.forEach(btn =>{
    btn.addEventListener("click",()=>{
        modsMobile.classList.add("active");
        homeMobile.classList.remove("active");
        home.classList.remove("active");
        forumMobile.classList.remove("active");
        forum.classList.remove("active");

        dropdownMobile.classList.add("d-none");
        contenidoLg.classList.add("d-none");
        chat.classList.add("d-none");

        mod1lg.classList.add("d-none");
        modx.classList.remove("d-none");
    });
});

cont.forEach(btn =>{
    btn.addEventListener("click",()=>{
        modsMobile.classList.add("active");
        homeMobile.classList.remove("active");
        home.classList.remove("active");
        forumMobile.classList.remove("active");
        forum.classList.remove("active");

        dropdownMobile.classList.add("d-none");
        contenidoLg.classList.add("d-none");
        chat.classList.add("d-none");

        mod1lg.classList.add("d-none");
        modx.classList.remove("d-none");
    });
});

sueldos.forEach(btn =>{
    btn.addEventListener("click",()=>{
        modsMobile.classList.add("active");
        homeMobile.classList.remove("active");
        home.classList.remove("active");
        forumMobile.classList.remove("active");
        forum.classList.remove("active");

        dropdownMobile.classList.add("d-none");
        contenidoLg.classList.add("d-none");
        chat.classList.add("d-none");

        mod1lg.classList.add("d-none");
        modx.classList.remove("d-none");
    });
});

//CHAT
forumMobile.addEventListener("click", async ()=>{
    modsMobile.classList.remove("active");
    modulos.classList.remove("active");
    homeMobile.classList.remove("active");
    home.classList.remove("active");
    forumMobile.classList.add("active");
    forum.classList.add("active");

    contenidoLg.classList.add("d-none");
    dropdownMobile.classList.add("d-none");
    mod1lg.classList.add("d-none");
    modx.classList.add("d-none");
    await chat.classList.remove("d-none");
    displayChat();    
});

forum.addEventListener("click", async ()=>{
    modsMobile.classList.remove("active");
    modulos.classList.remove("active");
    homeMobile.classList.remove("active");
    home.classList.remove("active");
    forumMobile.classList.add("active");
    forum.classList.add("active");

    contenidoLg.classList.add("d-none");
    mod1lg.classList.add("d-none");
    modx.classList.add("d-none");
    await chat.classList.remove("d-none");
    displayChat();
});

async function displayChat(){

    socket = io();

    messageForm.addEventListener("submit", e =>{
        e.preventDefault();
        let time = new Date();
        let created_at = `${time.getDate()}/${time.getMonth()} ${time.getHours()}:${time.getMinutes()}`;
    
        if(message.value != ""){
            socket.emit("send message", {message: message.value, user: user.innerText, fecha: created_at});
        }
        message.value = "";
    })
    
    socket.on("new message", data =>{
        displayMessage(data);
    });
    
    socket.on("load old messages", data =>{
        if(chatBox.innerHTML == ""){
            for (let i = 0; i < data.length; i++) {
                displayMessage(data[i]);
            }
        }   
    })
}

function displayMessage(data){
    const msj = d.createElement("div");
    msj.classList.add("w-45","rounded", "my-1", "px-1", "msj","animate");

    if(data.user == user.innerText){
        msj.classList.add("ms-auto");
        msj.classList.replace("msj","msjAdmin");
    }  
    
    if(data.user == "horarodriguezz" || data.user == "Cdora. B. Yesica" || data.user == "Cdor. R. R. Esteban"){
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


//logout
out.addEventListener("click",()=>{
    location.href = "http://localhost:3000/logout"
});
outMobile.addEventListener("click",()=>{
    location.href = "http://localhost:3000/logout"
});

