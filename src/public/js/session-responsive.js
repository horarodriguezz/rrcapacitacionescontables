//sidebars y app
const sidebar = document.querySelector(".side-bar");
const navtabs = document.getElementById("navtabs");
const app = document.getElementById("app");
const content = document.getElementById("content");
//pagina principal

const contenidoLg = document.getElementById("contenidoLg");
// Youtube videos
const iframe = document.getElementsByTagName("iframe");

//Breakoints
const lg = window.matchMedia("(min-width: 1280px)");
const md = window.matchMedia("(min-width: 768px)");

function loadResponsive(){
    if(lg.matches){
        app.classList.add("d-flex");
        navtabs.classList.add("d-none");
        sidebar.classList.remove("d-none");

        contenidoLg.children[0].classList.remove("d-none");
    }else if(md.matches){
        app.classList.add("d-flex");
        navtabs.classList.add("d-none");
        sidebar.classList.remove("d-none");

        contenidoLg.children[0].classList.remove("d-none");
    }else{
        app.classList.remove("d-flex");
        sidebar.classList.add("d-none");
        navtabs.classList.remove("d-none");

        contenidoLg.children[0].classList.add("d-none");

    }

}


document.addEventListener("DOMContentLoaded", loadResponsive());
window.addEventListener("resize", ()=>{
    if(lg.matches){
        app.classList.add("d-flex");
        navtabs.classList.add("d-none");
        sidebar.classList.remove("d-none");
        dropdownMobile.classList.add("d-none");
        modsMobile.classList.remove("active");
        modulos.classList.remove("active");

        contenidoLg.children[0].classList.remove("d-none");

        for (let i = 0; i < iframe.length; i++) {
            const video = iframe[i];
            
            video.classList.remove("img-fluid");
        }
    }else if(md.matches){
        app.classList.add("d-flex");
        navtabs.classList.add("d-none");
        sidebar.classList.remove("d-none");
        dropdownMobile.classList.add("d-none");
        modsMobile.classList.remove("active");
        modulos.classList.remove("active");

        contenidoLg.children[0].classList.remove("d-none");

        for (let i = 0; i < iframe.length; i++) {
            const video = iframe[i];
            
            video.classList.remove("img-fluid");
        }
    }else{
        app.classList.remove("d-flex");
        sidebar.classList.add("d-none");
        navtabs.classList.remove("d-none");

        contenidoLg.children[0].classList.add("d-none");

        for (let i = 0; i < iframe.length; i++) {
            const video = iframe[i];
            
            video.classList.add("img-fluid");
        }
    }      
});
