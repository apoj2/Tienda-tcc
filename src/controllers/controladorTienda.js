//exportacion de datos
import {productosBD} from'../helpers/database.js'
import {llenarProductos} from './controladorLlenado.js'
import {buscarProductos} from './ControladorBuscar.js'
import {ampliarproductos} from './controladorClicAmpliarProducto.js'

console.log(productosBD)

llenarProductos(productosBD)

buscarProductos(productosBD)

//escuchmos clic en el contenedor padre de la tienda
let fila =document.getElementById('fila')

fila.addEventListener("click",function(evento){
    
    if(evento.target.parentElement.classList.contains("card") == true ){
    let producto = ampliarproductos(evento)
    
    //almacenar en el local storage la informacion del producto seleccionado
    localStorage.setItem('infoProducto',JSON.stringify(producto) )
    window.location.href='./Infoproducto.html'
}      

})





