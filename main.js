
//! MENU DESPLEGABLE EMAIL

const menuEmail = document.querySelector('.navbar-email'); //Seleccionar elemento al que se le agregara la interaccion. Elemento con el correo.

const desktopMenu = document.querySelector('.desktop-menu'); //Elemento que se agregara al momento de realizar el click.

menuEmail.addEventListener('click', toggleDesktopMenu); //Cuando se realice click muestre el menu desplegable del email.


function toggleDesktopMenu() {
   //Esta funcion agrega o quita la clase inactive en el elemento desktopMenu, cuando se realice el evento. 
   if (!isDetailCartclosed) {
      detailCart.classList.add('inactive');
   }

   desktopMenu.classList.toggle('inactive'); 
};

//! MENU DESPLEGABLE HAMBURGUESA

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burguerMenu.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile() {

   const isDetailCartclosed = detailCart.classList.contains('inactive');

   if (!isDetailCartclosed) {
      detailCart.classList.add('inactive');
   }
   mobileMenu.classList.toggle('inactive'); 

};

//! MENU CARRITO DE COMPRAS

const menuCartIcon = document.querySelector('.navbar-shopping-cart'); //Selecciono el icono del carrito de compras

const detailCart = document.querySelector('.product-detail'); //Selecciono el elemento a mostrar, que es el contenedor de los elementos en el carrito de compras. 

menuCartIcon.addEventListener('click', toggleCartDetail);

function toggleCartDetail() {
   //Mostrar el detalle de los elementos contenidos en el carrito.

   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
 
   //Confirmo que el mobile menu no este activo.
   if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
   
   }
   detailCart.classList.toggle('inactive');
};

