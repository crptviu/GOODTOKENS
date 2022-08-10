document.getElementById("btn_registro").addEventListener("click", registro);
document.getElementById("btn_iniciar_sesion").addEventListener("click", inicioSesion);
window.addEventListener("resize", anchoPagina);

var formulario_ingreso = document.querySelector(".formulario_ingreso");
var formulario_registro = document.querySelector(".formulario_registro");
var contenedor_ingreso_registro = document.querySelector(".contenedor_ingreso_registro");
var caja_fondo_ingreso = document.querySelector(".caja_fondo_ingreso");
var caja_fondo_registro = document.querySelector(".caja_fondo_registro");

function inicioSesion() {

    if (window.innerWidth > 850) {
        formulario_registro.style.display = "none";
        contenedor_ingreso_registro.style.left = "10px";
        formulario_ingreso.style.display = "block";
        caja_fondo_registro.style.opacity = "1";
        caja_fondo_ingreso.style.opacity = "0";
    } else {
        formulario_registro.style.display = "none";
        contenedor_ingreso_registro.style.left = "0px";
        formulario_ingreso.style.display = "block";
        caja_fondo_registro.style.display = "block";
        caja_fondo_ingreso.style.display = "none";
    }

}

function registro() {

    if (window.innerWidth > 850) {
        formulario_registro.style.display = "block";
        contenedor_ingreso_registro.style.left = "410px";
        formulario_ingreso.style.display = "none";
        caja_fondo_registro.style.opacity = "0";
        caja_fondo_ingreso.style.opacity = "1";
    } else {
        formulario_registro.style.display = "block";
        contenedor_ingreso_registro.style.left = "0px";
        formulario_ingreso.style.display = "none";
        caja_fondo_registro.style.display = "none";
        caja_fondo_ingreso.style.opacity = "1";
    }

}

function anchoPagina() {
    if (window.innerWidth > 850) {
        caja_fondo_ingreso.style.display = "block";
        caja_fondo_registro.style.display = "block";
    } else {
        caja_fondo_registro.style.display = "block";
        caja_fondo_registro.style.opacity = "1";
        caja_fondo_ingreso.style.display = "none";
        formulario_ingreso.style.display = "block";
        formulario_registro.style.display = "none";
        contenedor_ingreso_registro.style.left = "0px";
    }
}

anchoPagina();