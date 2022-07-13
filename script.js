const image2 = document.querySelector('.image2');
const slider = document.querySelector('.contenedor-slider');

slider.addEventListener('mousemove', e => {
	image2.style.left = e.clientX + 'px';
});



// const datos = {
//     nombre:'',
//     email:'',
//     mensaje:''
// }



// const nombre = document.querySelector('#nombre');
// const email = document.querySelector('#email');
// const mensaje = document.querySelector('#mensaje');

// // El evento submit

// const formulario = document.querySelector('.formulario')
// formulario.addEventListener('submit', function(e){
//     e.preventDefault();

// //Validar el formulario
// const {nombre, email, mensaje} = datos;

// if(nombre===''|| email==='' || mensaje===''){
//     mostrarError ('Todos los campos son obligatorios')
//     return; //Corta la ejecucion de la funcion

// }
//     //Enviar el formulario
//     correcto ('Mensaje enviado correctamente');
// });

// //Mostrar un error en pantalla

// function mostrarError (mensaje){
//     const error = document.createElement ('P')
//     error.textContent = mensaje;
//     error.classList.add('error')

//     formulario.appendChild (error)

//     //Quitar el mensaje de error despues de un tiempo
//  setTimeout(() => {
//      error.remove();
//  }, 5000);

// }

// // Mostrar mensaje que esta ok el formulario

// function correcto(mensaje) {
//     const correcto = document.createElement ('P')
//     correcto.textContent = mensaje;
//     correcto.classList.add('correcto')

//     formulario.appendChild(correcto)

//     setTimeout(() => {
//         correcto.remove();
//     }, 5000);
// }


const menuProductos = document.querySelector('.enlace_productos');
const submenuProductos = document.querySelector('.submenu_productos');
const header = document.querySelector('.header');
const main = document.querySelector('main');

menuProductos.addEventListener('mouseover',function(){
	submenuProductos.classList.add('active');
	submenuProductos.classList.remove('submenu_productos')
})


main.addEventListener('mouseover',function(){
	submenuProductos.classList.remove('active');
	submenuProductos.classList.add('submenu_productos')
})