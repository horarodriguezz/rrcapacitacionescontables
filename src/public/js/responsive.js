const d = document, w = window;

//Contenido Capacitaciones
const bcont = `<div class="row">
<h3 class="w-50 mx-auto text-center">Ofrecemos un entrenamiento intensivo <br> con practica REAL en Estudio Contable.</h3>
</div>
<div class="row mt-5" style="padding-bottom: 50px;">
<div class="col-md-3 w-25">
    <div class="card text-white modulo" style="background-color: rgba(120, 111, 166, 1);">
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <i class="fas fa-book fs-2 py-3"></i>
            </div>
            <h6 class=" text-center text-decoration-underline">Asistente Contable - Inicial</h6>
            <p class="text-center">Te enseñamos todos los conocimientos fundamentales que un Contador necesita para que lo asistan de forma correcta durante su trabajo.</p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-outline-light" onclick="location.href='modulos.html'">Ver más</button>
            </div>
            
        </div>
    </div>
    </div>
    <div class="col-md-3 w-25">
    <div class="card border-secondary modulo">
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <i class="fas fa-graduation-cap fs-2 py-3"></i>
            </div>
            <h6 class=" text-center text-decoration-underline">Asistente Contable - Avanzado</h6>
            <p class="text-center">Vamos un paso mas allá. Te enseñamos tareas mas avanzadas que puede hacer un asistente en la dinamica de un Estudio Contable.</p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-outline-dark" onclick="location.href='modulos.html'">Ver más</button>
            </div>
            
        </div>
    </div>
    </div>
    <div class="col-md-3 w-25">
    <div class="card text-white modulo" style="background-color: rgba(120, 111, 166, 1);">
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <i class="fas fa-calculator fs-2 py-3"></i>
            </div>
            <h6 class=" text-center text-decoration-underline">Modulo de Contabilidad</h6>
            <p class="text-center">Conocerás los procedimientos para hacer un balance desde la Apertura hasta el Balance de Presentación y armado de libros contables</p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-outline-light" onclick="location.href='modulos.html'">Ver más</button>
            </div>
            
        </div>
    </div>
    </div>
    <div class="col-md-3 w-25">
    <div class="card border-secondary modulo">
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <i class="fas fa-file-invoice-dollar fs-2 py-3"></i>
            </div>
            <h6 class=" text-center text-decoration-underline">Modulo de Sueldos</h6>
            <p class="text-center">Aprenderemos a confeccionar recibos de sueldos, liquidar cargas sociales y sindicales de cualquier convenio colectivo de trabajo</p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-outline-dark" onclick="location.href='modulos.html'">Ver más</a></button>
            </div>
            
        </div>
    </div>
    </div>
</div>`;

const mcont = `<h3 class="text-center">Ofrecemos un entrenamiento intensivo con practica REAL en Estudio Contable.</h3>
<div class="row mt-5">
    <div class="col-md-6 d-flex justify-content-center">   
        <div class="card text-white modulo" style="background-color: rgba(120, 111, 166, 1); width: 400px;">
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <i class="fas fa-book fs-2 py-3"></i>
                </div>
                <h6 class=" text-center text-decoration-underline">Asistente Contable - Inicial</h6>
                <p class="text-center">Te enseñamos todos los conocimientos fundamentales que un Contador necesita para que lo asistan de forma correcta durante su trabajo.</p>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-outline-light"><a class="text-decoration-none text-white" href="modulos.html">Ver más</a></button>
                </div>
            </div>
        </div>
    </div>    
    <div class="col-md-6 d-flex justify-content-center">    
        <div class="card border-secondary modulo" style="width: 400px;">
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <i class="fas fa-graduation-cap fs-2 py-3"></i>
                </div>
                <h6 class=" text-center text-decoration-underline">Asistente Contable - Avanzado</h6>
                <p class="text-center">Vamos un paso mas allá. Te enseñamos tareas mas avanzadas que puede hacer un asistente en la dinamica de un Estudio Contable.</p>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-outline-dark"><a class="text-decoration-none text-dark" href="modulos.html">Ver más</a></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row mt-2">
    <div class="col-md-6 d-flex justify-content-center">
        <div class="card border-secondary modulo" style="width: 400px;">
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <i class="fas fa-calculator fs-2 py-3"></i>
                </div>
                <h6 class=" text-center text-decoration-underline">Modulo de Contabilidad</h6>
                <p class="text-center">Conocerás los procedimientos para hacer un balance desde la Apertura hasta el Balance de Presentación y armado de libros contables</p>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-outline-dark"><a class="text-decoration-none text-dark" href="modulos.html">Ver más</a></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6 d-flex justify-content-center">
        <div class="card text-white modulo" style="width: 400px; background-color: rgba(120, 111, 166, 1);">
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <i class="fas fa-file-invoice-dollar fs-2 py-3"></i>
                </div>
                <h6 class=" text-center text-decoration-underline">Modulo de Sueldos</h6>
                <p class="text-center">Aprenderemos a confeccionar recibos de sueldos, liquidar cargas sociales y sindicales de cualquier convenio colectivo de trabajo</p>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-outline-light"><a class="text-decoration-none text-white" href="modulos.html">Ver más</a></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

const scont = `<h3 class="mx-auto mb-4 text-center">Ofrecemos un entrenamiento intensivo con practica REAL en Estudio Contable.</h3>
<div class="card mx-5 mb-3 modulo" style="background-color: rgba(120, 111, 166, 1);">
    <a href="./modulos.html" class="text-white text-decoration-none">
        <div class="card-body" >
            <div class="d-flex justify-content-center">
                <i class="fas fa-book fs-2 py-3" aria-hidden="true"></i>
            </div>
            <h6 class=" text-center text-decoration-underline">Asistente Contable - Inicial</h6>
            <p class="text-center">Te enseñamos todos los conocimientos fundamentales que un Contador necesita para que lo asistan de forma correcta durante su trabajo.</p>  
        </div>
    </a>     
</div>
<div class="card border-secondary mx-5 mb-3 modulo">
    <a href="./modulos.html" class="text-decoration-none text-dark">
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <i class="fas fa-graduation-cap fs-2 py-3" aria-hidden="true"></i>
            </div>
            <h6 class=" text-center text-decoration-underline">Asistente Contable - Avanzado</h6>
            <p class="text-center">Vamos un paso mas allá. Te enseñamos tareas mas avanzadas que puede hacer un asistente en la dinamica de un Estudio Contable.</p>  
        </div>
    </a>
</div>
<div class="card mx-5 mb-3 modulo" style="background-color: rgba(120, 111, 166, 1);">
    <a href="./modulos.html" class="text-white text-decoration-none">
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <i class="fas fa-calculator fs-2 py-3" aria-hidden="true"></i>
            </div>
            <h6 class=" text-center text-decoration-underline">Modulo de Contabilidad</h6>
            <p class="text-center">Conocerás los procedimientos para hacer un balance desde la Apertura hasta el Balance de Presentación y armado de libros contables</p>
        </div>
    </a>
</div>
<div class="card border-secondary mx-5 modulo">
    <a href="./modulos.html" class="text-decoration-none text-dark">
        <div class="card-body">
            <div class="d-flex justify-content-center">
                <i class="fas fa-file-invoice-dollar fs-2 py-3" aria-hidden="true"></i>
            </div>
            <h6 class=" text-center text-decoration-underline">Modulo de Sueldos</h6>
            <p class="text-center">Aprenderemos a confeccionar recibos de sueldos, liquidar cargas sociales y sindicales de cualquier convenio colectivo de trabajo</p>
        </div>
    </a>
</div>`;

//Contenido quienes somos
const bigc = `<div class="background-overlay">
<div class="container">
    <div class="row pt-5">
        <h1 class="text-center mb-5">¿Quienes somos?</h1>
        <div class="col-md-6 my-5 d-flex justify-content-center align-items-center">                     
            <figure class="figure">
                <img src="img/Esteban.jpg" class="figure-img img-fluid rounded-3 shadow-lg">
            </figure>    
        </div>
        <div class="col-md-6 w-50 text-center fs-4 justify-content-center align-self-center">
            <h1 class="display-4">Cdor. Rodriguez Ramirez Esteban</h1>
            <p class="fs-5 lead">
               Contador Público egresado en la Universidad Argentina John F. Kennedy. He dictado cursos en la Universidad de Buenos Aires y en otras instituciones educativas. Trabajo de forma independiente hace mas de 20 años. <br> Me apasiona compartir el conocimiento, mas se comparte, mas se multiplica, mas alto es el nivel de lo que hacemos. <br> He trabajado con muchos estudiantes de Económicas y yo tambien fui uno, y es por eso que diseñamos estas capacitaciones especificamente para ustedes. <br> Son los contenidos que me hubiera gustado que me enseñen hace 20 años cuando enviaba mis CVs por correo y nadie me daba la oportunidad porque no tenia experiencia. Les entrego con esto mucho de lo que aprendí en mis 20 años de experiencia.
            </p>
            <a href="https://www.facebook.com/rodriguezramirezestudio" target="_blank" style="text-decoration: none; color:white;" ><i class="fab fa-facebook fs-3"></i></i></a>
            <a href="https://www.linkedin.com/in/esteban-rodriguez-ramirez-059053b9/" target="_blank" style="text-decoration: none; color:white;"><i class="fab fa-linkedin fs-3 ps-3"></i></a>
            
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 w-50 my-5 text-center fs-4 justify-content-center align-self-center">
            <h1 class="display-4">Cdora. Bolaño Yesica Ivana</h1>
            <p class="fs-5 lead">Egresada de la Universidad Nacional de la Matanza en el año 2014. Matriculada en el Consejo Profesional de Ciencias Económicas de la Ciudad de Buenos Aires y de la Provincia de Buenos Aires. <br>

                Con mas de 10 años de experiencia en el rubro. <br>
                
                Realicé la Especialización en Régimen Aduanero, Tributario y Cambiario del Comercio Internacional de Mercaderías en el C.P.C.E.C.A.B.A. <br>
                
                Asistí a Seminarios y ciclos de Actualización del Nuevo Código Civil y Comercial, recientemente puesto en vigencia. <br>
                
                Asisto periódicamente a Ciclos de Actualización Tributaria Profesional.                            
            </p>
            <a href="https://www.instagram.com/cdora.yesica_bolano/" target="_blank" style="text-decoration: none; color:white;" ><i class="fab fa-instagram fs-3"></i></i></a>
            <a href="http://linkedin.com/in/yesica-ivana-bola%C3%B1o-3512273a" target="_blank" style="text-decoration: none; color:white;"><i class="fab fa-linkedin fs-3 ps-3"></i></a>
            <a href="http://yesicab87.wixsite.com/yesicabolano" target="_blank" style="text-decoration: none; color:white;"><i class="fas fa-globe fs-3 ps-3"></i></a>
            
        </div>
        <div class="col-md-6 my-5 d-flex justify-content-center align-items-center">                     
            <figure class="figure d-flex">
                <img src="img/yesica.PNG" class="figure-img img-fluid rounded-3 shadow-lg">
            </figure>    
        </div>
        
    </div>
</div>
</div>`;

const smc = `<div class="background-overlay">
<div class="container py-5">
    <h1 class="text-center mb-5">¿Quienes somos?</h1>
    <figure class="figure">
        <img src="img/Esteban.jpg" class="figure-img img-fluid rounded-3 shadow-lg">
    </figure>
    <div class="text-center">
        <h1 class="display-5">Cdor. Rodriguez Ramirez Esteban</h1> 
        <a href="https://www.facebook.com/rodriguezramirezestudio" target="_blank" style="text-decoration: none; color:white;"><i class="fab fa-facebook fs-3" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/esteban-rodriguez-ramirez-059053b9/" target="_blank" style="text-decoration: none; color:white;"><i class="fab fa-linkedin fs-3 ps-3" aria-hidden="true"></i></a>
    </div>
    <p class="fs-5 lead text-center my-3">
    Contador Público egresado en la Universidad Argentina John F. Kennedy. He dictado cursos en la Universidad de Buenos Aires y en otras instituciones educativas. Trabajo de forma independiente hace mas de 20 años. <br> Me apasiona compartir el conocimiento, mas se comparte, mas se multiplica, mas alto es el nivel de lo que hacemos. <br> He trabajado con muchos estudiantes de Económicas y yo tambien fui uno, y es por eso que diseñamos estas capacitaciones especificamente para ustedes. <br> Son los contenidos que me hubiera gustado que me enseñen hace 20 años cuando enviaba mis CVs por correo y nadie me daba la oportunidad porque no tenia experiencia. Les entrego con esto mucho de lo que aprendí en mis 20 años de experiencia.
    </p>
    <div class="d-flex justify-content-center mt-5">
        <figure class="figure">
            <img src="img/yesica.PNG" class="figure-img img-fluid rounded-3 shadow-lg">
        </figure>
    </div>
    <div class="text-center">
        <h1 class="display-5">Cdora. Bolaño Yesica Ivana</h1>
        <a href="https://www.instagram.com/cdora.yesica_bolano/" target="_blank" style="text-decoration: none; color:white;"><i class="fab fa-instagram fs-3" aria-hidden="true"></i></a>
        <a href="http://linkedin.com/in/yesica-ivana-bola%C3%B1o-3512273a" target="_blank" style="text-decoration: none; color:white;"><i class="fab fa-linkedin fs-3 ps-3" aria-hidden="true"></i></a>
        <a href="http://yesicab87.wixsite.com/yesicabolano" target="_blank" style="text-decoration: none; color:white;"><i class="fas fa-globe fs-3 ps-3" aria-hidden="true"></i></a>
    </div>
    <p class="fs-5 lead my-3 text-center">
        Con mas de 10 años de experiencia en el rubro. <br>

        Realicé la Especialización en Régimen Aduanero, Tributario y Cambiario del Comercio Internacional de Mercaderías en el C.P.C.E.C.A.B.A. <br>
        
        Asistí a Seminarios y ciclos de Actualización del Nuevo Código Civil y Comercial, recientemente puesto en vigencia. <br>
        
        Asisto periódicamente a Ciclos de Actualización Tributaria Profesional.
    </p>
</div>
</div>`;

//
const capacitaciones = ()=>{
    let mql = w.matchMedia("(min-width: 1200px)");
    let mql2 = w.matchMedia("(min-width: 768px)")
    if(mql.matches){
        d.getElementById("capa").innerHTML = bcont;
    }
    else if(mql2.matches){
        d.getElementById("capa").innerHTML = mcont;
    }
    else{
        d.getElementById("capa").innerHTML = scont;
    }
}

const qs = async ()=>{
    let mql = w.matchMedia("(min-width: 992px)");
    
    await checkQS(mql);

    d.getElementById("quienes-somos").classList.add("somos");


}

function checkQS(mql){
    if(mql.matches){
        d.getElementById("quienes-somos").innerHTML = bigc;
    }
    else{
        d.getElementById("quienes-somos").innerHTML = smc;
    }

}

d.addEventListener("DOMContentLoaded", capacitaciones);
w.addEventListener("resize", capacitaciones);

d.addEventListener("DOMContentLoaded", qs);
w.addEventListener("resize", qs);

