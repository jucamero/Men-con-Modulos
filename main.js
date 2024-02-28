
import { mostrarMenu } from "./Modulos/ModuloMenu.js";


//Esta es una opción para llamar a HTML y es como llamar a css con #
const btn = document.querySelector("#btn");

//este evento elimina la recarga de pag al seleccionar un menu
btn.addEventListener("click",mostrarMenu);