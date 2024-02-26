
import { mostrarMenu } from "./Modulos/ModuloMenu.js";
import { mostrarPrecio } from "./Modulos/ModuloFunction.js";


mostrarMenu();
mostrarPrecio();


//este evento elimina la recarga de pag al seleccionar un menu
btn.addEventListener("click",mostrarMenu);