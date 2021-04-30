const d = document, w = window;
//Elementos del DOM
//Botones del navtabs
const inicial = d.getElementById("inicial");
const avanzado = d.getElementById("avanzado");
const sueldos = d.getElementById("sueldos");
const contabilidad = d.getElementById("contabilidad");

//cardbody
const cardBody = d.querySelector(".card-body");

inicial.addEventListener("click",()=>{
    inicial.classList.add("active");
    avanzado.classList.remove("active");
    sueldos.classList.remove("active");
    contabilidad.classList.remove("active");

    cardBody.innerHTML = `<div>
    <h4 class="text-center"><i class="fas fa-book fs-2 px-3"></i>Módulo 1: Asistente Contable Inicial</h4>
</div>
<hr>
<ul class="list-group list-group-flush w-75 animate">
    <li class="list-group-item"><b>1. Persona</b> - Definición de persona humana y jurídica.</li>
    <li class="list-group-item"><b>2. Sujetos responsables por deuda propia.</b></li>
    <li class="list-group-item"><b>3. Tributos </b>- Conceptos de recaudación, organismos recaudadores, tipos y ejemplos.</li>
    <li class="list-group-item" data-bs-toggle="collapse" href="#Contribuyente" role="button" aria-expanded="false" aria-controls="Contribuyente"><div class="d-flex"><b class="flex-grow-1">4. Contribuyente</b><i class="fas fa-caret-down fs-4"></i></div></li>
    <div class="collapse" id="Contribuyente">
        <ul>
            <li>Definición e identificación (CUIT).</li>
            <li>Clave Fiscal.</li>
            <li>Tipos de contribuyente.
                <ul>
                    <li>Monotributistas.</li>
                    <li>Responsables Inscriptos</li>
                    <li>Consumidores Finales.</li>
                    <li>Exentos.</li>
                    <li>Agentes de recaudación.</li>
                </ul>
            </li>
            
        </ul>
    </div>
    <li class="list-group-item" data-bs-toggle="collapse" href="#Periodo" role="button" aria-expanded="false" aria-controls="Periodo"><div class="d-flex"><b class="flex-grow-1">5. Periodo Fiscal.</b><i class="fas fa-caret-down fs-4"></i></div></li>
    <div id="Periodo" class="collapse">
        <ul>
            <li>Definición de año fiscal.</li>
            <li>Diferencias entre personas humanas y jurídicas.</li>
        </ul>
    </div>
    <li class="list-group-item"><b>6. Caracterización de un contribuyente.</b></li>
    <li class="list-group-item" data-bs-toggle="collapse" href="#Obli" role="button" aria-expanded="false" aria-controls="Obli"><div class="d-flex"><b class="flex-grow-1">7. Obligaciones mensuales / anuales de los contribuyentes.</b><i class="fas fa-caret-down fs-4"></i></div></li>
    <div id="Obli" class="collapse">
        <ul>
            <li>Monotributistas.</li>
            <li>Régimen general.</li>
            <li>Agentes de recaudación.</li>
        </ul>
    </div>
    <li class="list-group-item"><b>8. Calendarios de vencimiento.</b></li>
    <li class="list-group-item" data-bs-toggle="collapse" href="#docu" role="button" aria-expanded="false" aria-controls="docu"><div class="d-flex"><b class="flex-grow-1">9. Documentación de respaldo de operaciones.</b><i class="fas fa-caret-down fs-4"></i></div></li>
    <div id="docu" class="collapse">
        <ul>
            <li>Tipos de operaciones, comprobantes a emitir, Sistemas de Emision de comprobantes.</li>
            <li>Factura electrónica y datos que debe tener.</li>
            <li>Tipos de facturas: A, A con Leyenda, M, B, C. Requisitos.</li>
            <li>Ejemplos de emisiones.</li>
            <li>Facturas manuales.</li>
            <li>Ticket - Controlador Fiscal.</li>
            <li>Resúmenes bancarios.</li>
            <li>Resumen de Tarjeta de crédito.</li>
            <li>Certificados de retención de IVA y Seg. Social (SIRE).</li>
            <li>Certificados de retención Ganancias (SICORE).</li>
            <li>Certificados de retención IIBB</li>
        </ul>
    </div>
    <li class="list-group-item" data-bs-toggle="collapse" href="#emision" role="button" aria-expanded="false" aria-controls="emision"><div class="d-flex"><b class="flex-grow-1">10. Emisión de una factura electrónica.</b><i class="fas fa-caret-down fs-4"></i></div></li>
    <div id="emision" class="collapse">
        <ul>
            <li>Comprobantes en linea.</li>
            <li>App.</li>
            <li>Tutoriales.</li>
        </ul>
    </div>
    <li class="list-group-item" data-bs-toggle="collapse" href="#contenido" role="button" aria-expanded="false" aria-controls="contenido"><div class="d-flex"><b class="flex-grow-1">11. Contenido de un comprobante y su implicancia.</b><i class="fas fa-caret-down fs-4"></i></div></li>
    <div id="contenido" class="collapse">
        <ul>
            <li>Concepto facturado (Tipos de activos, tipos de gastos).</li>
            <li>Jurisdicción de atribución.</li>
            <li>Validez del comprobante.</li>
        </ul>
    </div>
    <li class="list-group-item" data-bs-toggle="collapse" href="#sistema" role="button" aria-expanded="false" aria-controls="sistema"><div class="d-flex"><b class="flex-grow-1">12. Conociendo un Sistema Informático Contable - Practica en Estudio Contable</b><i class="fas fa-caret-down fs-4"></i></div></li>
    <div id="sistema" class="collapse">
        <ul>
            <li>Carga de un comprobante Factura (Clientes y proveedores).</li>
            <li>Carga de retenciones.</li>
            <li>Carga de Extracto bancario.</li>
            <li>Carga de liquidación de Tarjeta de Crédito.</li>
            <li>Emisión de Subdiarios de Compras y Ventas.</li>
        </ul>
    </div>
    <li class="list-group-item" data-bs-toggle="collapse" href="#final" role="button" aria-expanded="false" aria-controls="final"><div class="d-flex"><b class="flex-grow-1">13. Final del módulo.</b><i class="fas fa-caret-down fs-4"></i></div></li>
    <div id="final" class="collapse">
        <ul>
            <li>Finalidad y utilidad de la documentación preparada para el Contador.</li>
            <li>Introducción a la liquidación de IVA e IIBB.</li>
        </ul>
    </div>
    <li class="list-group-item"><b>14. PRACTICA REAL EN ESTUDIO CONTABLE.</b></li>
    </ul>`;
});

avanzado.addEventListener("click",()=>{
    inicial.classList.remove("active");
    avanzado.classList.add("active");
    sueldos.classList.remove("active");
    contabilidad.classList.remove("active");

    cardBody.innerHTML = `<div>
    <h4 class="text-center"><i class="fas fa-graduation-cap fs-2 px-3"></i>Módulo 2: Asistente Contable Avanzado</h4>
</div>
<hr>
<ul class="list-group list-group-flush w-75 animate">
    <li class="list-group-item"><b>1. Solicitud de Clave Fiscal / Blanqueo</b></li>
    <li class="list-group-item"><b>2. Solicitud de CUIT</b></li>
    <li class="list-group-item"><b>3. Información previa al alta de un Contribuyente</b></li>
    <li class="list-group-item"><b>4. R.U.T. (Registro Único Tributario)</b></li>
    <li class="list-group-item"><b>5. Alta de contribuyente Monotributista.</b></li>
    <li class="list-group-item"><b>6. Alta de Contribuyente de Régimen General.</b></li>
    <li class="list-group-item"><b>7. Solicitud de autorización para emitir comprobantes + CAI + Puntos de Venta.</b></li>
    <li class="list-group-item"><b>8. Controladores Fiscales.</b></li>
    <li class="list-group-item"><b>9. Implementación de Factura electrónica.</b></li>
    <li class="list-group-item"><b>10. Regímenes de Ingresos Brutos.</b></li>
    <li class="list-group-item"><b>11. Alta IIBB</b></li>
    <li class="list-group-item"><b>12. Consulta de Códigos Fiscales / Alícuotas.</b></li>
    <li class="list-group-item"><b>13. Carga de un contribuyente en Sistema Contable y configuración de parámetros.</b></li>
    <li class="list-group-item"><b>14. Conceptos teóricos en la liquidación de IIBB e IVA.</b></li>
    <li class="list-group-item"><b>15. Emisión de papeles de trabajo en Sistema Contable.</b></li>
    <li class="list-group-item"><b>16. Liquidación de Impuestos mensuales y confección del Régimen de Información.</b></li>
    <li class="list-group-item"><b>17. Formas de pago de Obligaciones.</b></li>
    </ul>`;
});

contabilidad.addEventListener("click", ()=>{
    inicial.classList.remove("active");
    avanzado.classList.remove("active");
    sueldos.classList.remove("active");
    contabilidad.classList.add("active");

    cardBody.innerHTML = `<div>
    <h4 class="text-center"><i class="fas fa-calculator fs-2 px-3"></i>Módulo 3: Contabilidad</h4>
</div>
<hr>
<ul class="list-group list-group-flush w-75 animate">
    <h4>Próximamente</h4>
    </ul>`;
});

sueldos.addEventListener("click",()=>{
    inicial.classList.remove("active");
    avanzado.classList.remove("active");
    sueldos.classList.add("active");
    contabilidad.classList.remove("active");

    cardBody.innerHTML = `<div>
    <h4 class="text-center"><i class="fas fa-file-invoice-dollar fs-2 px-3"></i>Módulo 4: Sueldos</h4>
</div>
<hr>
<ul class="list-group list-group-flush w-75 animate">
    <li class="list-group-item"><b>1. La ley de contrato de trabajo.</b></li>
    <li class="list-group-item"><b>2. Convenios Colectivos de Trabajo.</b></li>
    <li class="list-group-item"><b>3. Liquidación a mano de un sueldo.</b></li>
    <li class="list-group-item"><b>4. Liquidación de sueldos en Catedral Software.</b></li>
    <li class="list-group-item"><b>5. Papeles de trabajo de Cargas Sociales.</b></li>
    <li class="list-group-item"><b>6. Liquidación de cargas sociales.</b></li>
    <li class="list-group-item"><b>7. Liquidación de cargas sindicales.</b></li>
    </ul>`;
});