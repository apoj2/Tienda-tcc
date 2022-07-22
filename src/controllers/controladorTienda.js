//exportacion de datos
import {productosBD} from'../helpers/database.js'
import {llenarProductos} from './controladorLlenado.js'
import {buscarProductos} from './ControladorBuscar.js'
import {ampliarproductos} from './controladorClicAmpliarProducto.js'



llenarProductos(productosBD)

buscarProductos(productosBD)

//escuchmos clic en el contenedor padre de la tienda
let fila =document.getElementById('fila')

fila.addEventListener("click",function(evento){
    let producto = ampliarproductos(evento)
    console.log(producto)
    //almacenar en el local storage la informacion del producto seleccionado
    localStorage.setItem('infoProducto',JSON.stringify(producto) )
    window.location.href='./src/views/Infoproducto.html'

})




