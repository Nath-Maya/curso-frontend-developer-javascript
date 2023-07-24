
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

const detailCart = document.querySelector('.cart-detail'); //Selecciono el elemento a mostrar, que es el contenedor de los elementos en el carrito de compras. 

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

//! LISTA DE PRODUCTOS

const productsList = [];

productsList.push({
   name: "Bicicleta Gt Avalanche Comp 2022",
   price: 3259599,
   img: "https://assets.specialized.com/i/specialized/91522-55_ROCKHOPPER-COMP-29-REDWD-SMK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});

productsList.push({
   name: "Bicicleta GT Avalanche Elite 29 2022",
   price: 2570800,
   img: "https://bicistore.com.co/wp-content/uploads/2021/01/imagen-6-1.jpg",
});

productsList.push({
   name: "Bicicleta GT Force Elite",
   price: 16780400,
   img: "https://bicistore.com.co/wp-content/uploads/2021/11/20220520_145823.jpg",
});

//! CREAR ELEMENTO HTML CON CADA PRODUCTO
//Se recorre el array de productList.

function renderProducts(arr) {

   for (product of arr) {
      //crear una constante para la creacion de elemento div.
      const productCard =  document.createElement("div");
      productCard.classList.add("product-card"); //agrego la clase
      //Estructura en html con los valores que se necesitan. 
      productCard.innerHTML = `
      <img src=${product.img} alt=${product.name}>
      <div class="product-info">
        <div>
          <p>$${product.price}</p>
          <p>${product.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
        <button class="view-detail" >Ver detalles </button>
      </div>
      `
      document.querySelector(".cards-container").appendChild(productCard);
      //Selecciono el elemento al que le agregare el elemento hijo: productCard.
   };

};

renderProducts(productsList);

//!FUNCION PARA MOSTRAR DETALLE DE UN PRODUCTO INDIVIDUAL

//Selecciono el boton de mostrar detalles que tiene la clase view-detail.
const botonViewDetail = document.querySelector('.view-detail');
const viewDetailProduct = document.querySelector('.product-detail');

botonViewDetail.addEventListener('click', openViewDetailProduct);

function openViewDetailProduct() {
   viewDetailProduct.classList.remove('inactive');
}
