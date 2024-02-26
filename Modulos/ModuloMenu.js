
//Esta es una opción para llamar a HTML y es como llamar a css con #
const btn = document.querySelector("#btn");

//Esta es otra opción para llamar a HTML
const menu = document.getElementById("menu");

//Crear un evento en una funcion para eliminar recarga 
export let mostrarMenu = (event) => {
    event.preventDefault();

    switch(menu.selectedIndex) {
        case 1:
        mostrarPrecio("img/helado.png","Img de Helado","Helado","9.000");
        break;
        case 2:
        mostrarPrecio("img/hamburguesa.png","Img de Hamburguesa","Hamburgesa","15.000");
        break;
        case 3:
        mostrarPrecio("img/perro.png","Img de Perro","Perro","10.000");
        break;
        case 4:
        mostrarPrecio("img/ensalada.png","Img de Ensalada","Ensalada","7.000");
        break;
        default:
            alert("Debe digitar una opción");

    }
};


