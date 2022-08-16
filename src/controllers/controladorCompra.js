import {botonescategoriasproductos} from '../helpers/botonescategorias.js'
import {llenarnavcategorias} from './controladorllenadonavcategorias.js'
import {ampliarproductos} from './controladorClicAmpliarProducto.js'
import {productosBD} from '../helpers/database.js'
import {llenarProductos} from './controladorllenado.js'
import{llenarProductosCarrusel}from './controladorllenadocarrusel.js'

import {sistemaautomaticovolqueta,sistemaautomaticovolquetacarrusel1,sistemaautomaticovolquetacarrusel2,sistemaautomaticovolquetacarrusel3,sistemaautomaticovolquetaproductos} from '../helpers/databasesistemaautomaticovolqueta.js'
import {sistemamanualvolqueta} from '../helpers/databasesistemamanualvolqueta.js'
import {sistemaautomaticommula} from '../helpers/databasesistemaautomaticomula.js'
import {sistemamanualmula} from '../helpers/databasesistemamanualmula.js'
import {protectoreslaterales,protectoreslateralesproductos} from '../helpers/databaseprotectoreslaterales.js'
import {cintareflectiva,cintareflectivaproductos} from '../helpers/databasecintareflectiva.js'
import {discosabrasivos,discosabrasivosproductos} from '../helpers/databasediscosabrasivos.js'
import {malacates} from '../helpers/databasemalacates.js'
import {repuestos} from '../helpers/databaserepuestos.js'
import{navegacionproductos}from './controladorClicAmpliarNavegacion.js'


llenarnavcategorias('navcategorias',botonescategoriasproductos)
let navcategorias=document.getElementById("navcategorias")

 navcategorias.addEventListener("click",function(evento){
    
        let botones = navegacionproductos(evento)
        console.log(botones)

        if(botones.categoria=='1'){
			window.location.href='./tienda.html#tienda'
            llenarProductos(sistemaautomaticovolquetaproductos)
            
        }
        if(botones.categoria=='2'){
			window.location.href='./tienda.html#tienda'
            llenarProductos(sistemaautomaticovolquetacarrusel2)
            
        }
        if(botones.categoria=='3'){
 
	        window.location.href='./tienda.html#tienda'
			llenarProductos(sistemaautomaticovolquetacarrusel1)
            
        }
        if(botones.categoria=='4'){
 
	        window.location.href='./tienda.html#tienda'
			llenarProductos(sistemaautomaticovolquetacarrusel2)
            
        }
        if(botones.categoria=='5'){
 
	        window.location.href='./tienda.html#tienda'
			llenarProductos(protectoreslateralesproductos)
            
        }
        if(botones.categoria=='6'){
 
	        window.location.href='./tienda.html#tienda'
			llenarProductos(cintareflectivaproductos)
            
        }
        if(botones.categoria=='7'){
 
	        window.location.href='./tienda.html#tienda'
			llenarProductos(discosabrasivosproductos)
            
        }
        if(botones.categoria=='8'){
 
	        window.location.href='./tienda.html#tienda'
			llenarProductos(sistemaautomaticovolquetacarrusel2)
            
        } if(botones.categoria=='9'){
			        window.location.href='./tienda.html#tienda'

            llenarProductos(sistemaautomaticovolquetacarrusel1)
            
        }
        
})

let producto=JSON.parse(localStorage.getItem('infoProducto'))
console.log(producto)
let carrito=[]
//verificar si hay productos en el carrito
if(JSON.parse(localStorage.getItem("carrito"))==null){
    carrito=[]
}
else{
    carrito=JSON.parse(localStorage.getItem("carrito"))
}

console.log(JSON.parse(localStorage.getItem("carrito")))


let imagenprincipal=document.getElementById('imagen1')
imagenprincipal.src=producto.foto
let imagenprincipal1=document.getElementById('imagen2')
imagenprincipal1.src=producto.foto

let textonombre=document.getElementById('nombreproducto')
textonombre.textContent=producto.objeto

let precioproducto=document.getElementById('precioproducto')
precioproducto.textContent=producto.precio

let descripcionproducto=document.getElementById("descripcionproducto")
descripcionproducto.textContent=producto.descripcion

let filtroProductoRelacoinados=productosBD.filter(function(productos){
    return(productos.categoria)
}) 






let agregarevento= document.getElementById("agregaralcarrito")





agregarevento.addEventListener("click",function(evento){

    let cantidadcarrito=document.getElementById("cantidadcarrito")
    

    let alerta=document.getElementById("alerta")
    alerta.classList.remove("invisible","d-none")

    setTimeout(function(){
        alerta.classList.add("invisible","d-none")
    },3000)

    let cantidad=document.getElementById("cantidad").value
    producto.cantidad=cantidad
//agregando elemento al arreglo
    carrito.push(producto)
    
    localStorage.setItem("carrito",JSON.stringify(carrito))
    //almaceno el carrito en el localstorage
 
    let suma=0

    carrito.forEach(function(producto){
        suma= Number(producto.cantidad)+suma
    })

    cantidadcarrito.textContent=suma

    localStorage.setItem("cantidadcarrito",suma)
           

    
})
let cantidadcarritoget=localStorage.getItem("cantidadcarrito")
cantidadcarrito.textContent=cantidadcarritoget

let imagenposicionada1=document.getElementById("imagenposicionada1")
imagenposicionada1.src=producto.foto
let imagenposicionada2=document.getElementById("imagenposicionada2")
let carrusel1=document.getElementById("carrusel1")
let carrusel2=document.getElementById("carrusel2")
let btn1=document.getElementById("btn-1")
let btn2=document.getElementById("btn-2")
carrusel1.addEventListener("mouseover",function(evento){
    imagenposicionada2.classList.remove("border-dark")
    imagenposicionada1.classList.add("border-dark")
 
})

carrusel2.addEventListener("mouseover",function(evento){
    imagenposicionada1.classList.remove("border-dark")
    imagenposicionada2.classList.add("border-dark")
  
})


if(producto.categoria=='1'){
    
    llenarProductos(sistemaautomaticovolquetaproductos)

    let fila =document.getElementById('fila')
 

}
if(producto.categoria=='2'){
    
    llenarProductos(sistemaautomaticovolquetaproductos)

    let fila =document.getElementById('fila')

}
if(producto.categoria=='3'){
    
    llenarProductos(sistemaautomaticovolquetaproductos)

    let fila =document.getElementById('fila')

}
if(producto.categoria=='4'){
    
    llenarProductos(sistemaautomaticovolquetaproductos)

    let fila =document.getElementById('fila')

}
if(producto.categoria=='5'){
    
    llenarProductos(protectoreslateralesproductos)

    let fila =document.getElementById('fila')
 

}
if(producto.categoria=='6'){
    
    llenarProductos(cintareflectivaproductos)

    let fila =document.getElementById('fila')

}
if(producto.categoria=='7'){
    
    llenarProductos(discosabrasivosproductos)

    let fila =document.getElementById('fila')

}
if(producto.categoria=='8'){
    
    llenarProductos(malacates)

    let fila =document.getElementById('fila')

}
if(producto.categoria=='9'){
    
    llenarProductos(discosabrasivosproductos)

    let fila =document.getElementById('fila')

}
let fila =document.getElementById('fila')
fila.addEventListener("click",function(evento){
    
    if(evento.target.parentElement.classList.contains("card") == true ){
    let producto = ampliarproductos(evento)
    
    //almacenar en el local storage la informacion del producto seleccionado
    localStorage.setItem('infoProducto',JSON.stringify(producto) )
    window.location.href='./Infoproducto.html'
}      

})

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



