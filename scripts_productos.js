
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
	submenuProductos.classList.add('submenu_productos')})