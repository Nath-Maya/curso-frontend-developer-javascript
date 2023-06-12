
//! MENU DESPLEGABLE EMAIL

const menuEmail = document.querySelector('.navbar-email'); //Seleccionar elemento al que se le agregara la interaccion. Elemento con el correo.

const desktopMenu = document.querySelector('.desktop-menu'); //Elemento que se agregara al momento de realizar el click.


menuEmail.addEventListener('click', toggleDesktopMenu); //Cuando se realice click muestre el menu desplegable del email.


function toggleDesktopMenu() {
   //Esta funcion agrega o quita la clase inactive en el elemento desktopMenu, cuando se realice el evento. 
   desktopMenu.classList.toggle('inactive'); 
};

//! MENU DESPLEGABLE HAMBURGUESA

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burguerMenu.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile() {
   mobileMenu.classList.toggle('inactive'); 
};
