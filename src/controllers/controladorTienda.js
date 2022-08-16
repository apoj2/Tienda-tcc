//exportacion de datos
import {productosBD} from'../helpers/database.js'
import {llenarProductos} from './controladorLlenado.js'
import {buscarProductos} from './ControladorBuscar.js'
import {ampliarproductos} from './controladorClicAmpliarProducto.js'
import {botonescategoriasproductos} from '../helpers/botonescategorias.js'
import {llenarnavcategorias} from './controladorllenadonavcategorias.js'
import{llenarProductosCarrusel}from './controladorllenadocarrusel.js'
import{navegacionproductos}from './controladorClicAmpliarNavegacion.js'

import {sistemaautomaticovolqueta,sistemaautomaticovolquetacarrusel1,sistemaautomaticovolquetacarrusel2,sistemaautomaticovolquetacarrusel3,sistemaautomaticovolquetaproductos} from '../helpers/databasesistemaautomaticovolqueta.js'
import {sistemamanualvolqueta} from '../helpers/databasesistemamanualvolqueta.js'
import {sistemaautomaticommula} from '../helpers/databasesistemaautomaticomula.js'
import {sistemamanualmula} from '../helpers/databasesistemamanualmula.js'
import {protectoreslaterales,protectoreslateralesproductos} from '../helpers/databaseprotectoreslaterales.js'
import {cintareflectiva,cintareflectivaproductos} from '../helpers/databasecintareflectiva.js'
import {discosabrasivos,discosabrasivosproductos} from '../helpers/databasediscosabrasivos.js'
import {malacates} from '../helpers/databasemalacates.js'
import {repuestos} from '../helpers/databaserepuestos.js'

let cantidaddecarrito=localStorage.getItem('cantidadcarrito')

console.log(productosBD)


llenarnavcategorias('navcategorias',botonescategoriasproductos)

llenarnavcategorias('navcategoriaslateral',botonescategoriasproductos)

llenarProductos(productosBD)

buscarProductos(productosBD)


let navcategorias=document.getElementById("navcategorias")

 navcategorias.addEventListener("click",function(evento){
    
        let botones = navegacionproductos(evento)

        localStorage.setItem('navcategorias',botones)
        console.log(botones)

        if(botones.categoria=='1'){
            llenarProductos(sistemaautomaticovolquetaproductos)
            window.location.href='./tienda.html#tienda'
        }
        if(botones.categoria=='2'){
            llenarProductos(sistemaautomaticovolquetacarrusel2)
            window.location.href='./tienda.html#tienda'
        }
        if(botones.categoria=='3'){
            llenarProductos(sistemaautomaticovolquetacarrusel1)
            window.location.href='./tienda.html#tienda'
        }
        if(botones.categoria=='4'){
            llenarProductos(sistemaautomaticovolquetacarrusel2)
            window.location.href='./tienda.html#tienda'
        }
        if(botones.categoria=='5'){
            llenarProductos(protectoreslateralesproductos)
            window.location.href='./tienda.html#tienda'
        }
        if(botones.categoria=='6'){
            llenarProductos(cintareflectivaproductos)
            window.location.href='./tienda.html#tienda'
        }
        if(botones.categoria=='7'){
            llenarProductos(discosabrasivosproductos)
            window.location.href='./tienda.html#tienda'
        }
        if(botones.categoria=='8'){
            llenarProductos(sistemaautomaticovolquetacarrusel2)
            window.location.href='./tienda.html#tienda'
        } if(botones.categoria=='9'){
            llenarProductos(sistemaautomaticovolquetacarrusel1)
            window.location.href='./tienda.html#tienda'
        }
        
})
let navcategoriaslateral=document.getElementById("navcategoriaslateral")
navcategoriaslateral.addEventListener("click",function(evento){
    
    let botones = navegacionproductos(evento)
    console.log(botones)

    
    if(botones.categoria=='1'){
        llenarProductos(sistemaautomaticovolquetaproductos)
    }
    if(botones.categoria=='2'){
        llenarProductos(sistemaautomaticovolquetacarrusel2)
    }
    if(botones.categoria=='3'){
        llenarProductos(sistemaautomaticovolquetacarrusel1)
    }
    if(botones.categoria=='4'){
        llenarProductos(sistemaautomaticovolquetacarrusel2)
    }
    if(botones.categoria=='5'){
        llenarProductos(protectoreslateralesproductos)
    }
    if(botones.categoria=='6'){
        llenarProductos(cintareflectivaproductos)
    }
    if(botones.categoria=='7'){
        llenarProductos(discosabrasivosproductos)
    }
    if(botones.categoria=='8'){
        llenarProductos(sistemaautomaticovolquetacarrusel2)
    } if(botones.categoria=='9'){
        llenarProductos(sistemaautomaticovolquetacarrusel1)
    }
    
})




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


let cantidadcarrito=document.getElementById('cantidadcarrito')

cantidadcarrito.textContent=cantidaddecarrito


llenarProductosCarrusel('fila1',sistemaautomaticovolquetacarrusel1)
llenarProductosCarrusel('fila2',sistemaautomaticovolquetacarrusel2)
llenarProductosCarrusel('fila3',sistemaautomaticovolquetacarrusel3)

let fila1 =document.getElementById('fila1')
fila1.addEventListener("click",function(evento){
    
    if(evento.target.parentElement.classList.contains("card") == true ){
    
    let producto = ampliarproductos(evento)
    
    //almacenar en el local storage la informacion del producto seleccionado
    localStorage.setItem('infoProducto',JSON.stringify(producto) )
    window.location.href='./Infoproducto.html'
}      

})
let fila2 =document.getElementById('fila2')
fila2.addEventListener("click",function(evento){
    
    if(evento.target.parentElement.classList.contains("card") == true ){
    let producto = ampliarproductos(evento)
    
    //almacenar en el local storage la informacion del producto seleccionado
    localStorage.setItem('infoProducto',JSON.stringify(producto) )
    window.location.href='./Infoproducto.html'
}      

})
let fila3 =document.getElementById('fila3')
fila3.addEventListener("click",function(evento){
    
    if(evento.target.parentElement.classList.contains("card") == true ){
    let producto = ampliarproductos(evento)
    
    //almacenar en el local storage la informacion del producto seleccionado
    localStorage.setItem('infoProducto',JSON.stringify(producto) )
    window.location.href='./Infoproducto.html'
}      

})









