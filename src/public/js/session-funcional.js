const d = document, w = window;




//Elementos del DOM
//Home
const homeMobile = d.getElementById("homeMobile");
const home = d.getElementById("home");
const contenido = d.getElementById("contenido");
//Chat
const forum = d.getElementById("forum");
const forumMobile = d.getElementById("forumMobile");
const roomsMobile = d.getElementById("roomsMobile");
const selectForm = d.getElementById("selectForm");
const rooms = d.querySelectorAll("#room")
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
    roomsMobile.classList.add("d-none");
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

    mod1lg.classList.add("d-none");
    modx.classList.add("d-none");
    roomsMobile.classList.add("d-none");
    contenidoLg.classList.remove("d-none");

    
});
//seccion modulos
modsMobile.addEventListener("click", ()=>{
    modsMobile.classList.add("active");
    modulos.classList.add("active");
    homeMobile.classList.remove("active");
    home.classList.remove("active");
    forumMobile.classList.remove("active");
    forum.classList.remove("active");

    contenidoLg.classList.add("d-none");
    dropdownMobile.classList.remove("d-none");
    roomsMobile.classList.add("d-none");
    mod1lg.classList.add("d-none");
    modx.classList.add("d-none");

    
});

ini.forEach(btn => {
    btn.addEventListener("click",()=>{
        modsMobile.classList.add("active");
        modulos.classList.add("active");
        homeMobile.classList.remove("active");
        home.classList.remove("active");
        forumMobile.classList.remove("active");
        forum.classList.remove("active");
        
        dropdownMobile.classList.add("d-none");
        contenidoLg.classList.add("d-none");
        roomsMobile.classList.add("d-none");
        mod1lg.classList.remove("d-none");
        modx.classList.add("d-none");

        
    });
});

avan.forEach(btn =>{
    btn.addEventListener("click",()=>{
        modsMobile.classList.add("active");
        modulos.classList.add("active");
        homeMobile.classList.remove("active");
        home.classList.remove("active");
        forumMobile.classList.remove("active");
        forum.classList.remove("active");

        dropdownMobile.classList.add("d-none");
        contenidoLg.classList.add("d-none");

        roomsMobile.classList.add("d-none");
        mod1lg.classList.add("d-none");
        modx.classList.remove("d-none");

        
    });
});

cont.forEach(btn =>{
    btn.addEventListener("click",()=>{
        modsMobile.classList.add("active");
        modulos.classList.add("active");
        homeMobile.classList.remove("active");
        home.classList.remove("active");
        forumMobile.classList.remove("active");
        forum.classList.remove("active");

        dropdownMobile.classList.add("d-none");
        contenidoLg.classList.add("d-none");

        roomsMobile.classList.add("d-none");
        mod1lg.classList.add("d-none");
        modx.classList.remove("d-none");

        
    });
});

sueldos.forEach(btn =>{
    btn.addEventListener("click",()=>{
        modsMobile.classList.add("active");
        modulos.classList.add("active");
        homeMobile.classList.remove("active");
        home.classList.remove("active");
        forumMobile.classList.remove("active");
        forum.classList.remove("active");

        dropdownMobile.classList.add("d-none");
        contenidoLg.classList.add("d-none");

        roomsMobile.classList.add("d-none");
        mod1lg.classList.add("d-none");
        modx.classList.remove("d-none");

        
    });
});

//CHAT
forumMobile.addEventListener("click", ()=>{
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

    roomsMobile.classList.remove("d-none");

});

forum.addEventListener("click", ()=>{
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

    roomsMobile.classList.remove("d-none");

})

selectForm.addEventListener("submit", ()=>{
    rooms.forEach(option => {
        option.setAttribute("value",`${option.innerText}`);
    });
})


//logout
out.addEventListener("click",()=>{
    location.href = "http://localhost:3000/logout"
});
outMobile.addEventListener("click",()=>{
    location.href = "http://localhost:3000/logout"
});

