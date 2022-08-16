import { llenarResumen}from './controladorPintarResumen.js'
import {botonescategoriasproductos} from '../helpers/botonescategorias.js'
import {llenarnavcategorias} from './controladorllenadonavcategorias.js'
import{navegacionproductos}from './controladorClicAmpliarNavegacion.js'

llenarnavcategorias('navcategorias',botonescategoriasproductos)
let carrito=JSON.parse(localStorage.getItem('carrito'))
let cantidaddecarrito=localStorage.getItem('cantidadcarrito')


let cantidadcarrito=document.getElementById('cantidadcarrito')

cantidadcarrito.textContent=cantidaddecarrito

console.log(carrito)

//comparo o pregunto si el carrtio esta vacio
if(carrito==null){

    let idtotalcompra=document.getElementById("totalcompra")
    idtotalcompra.classList.add("invisible")
    idtotalcompra.textContent=""
    llenarResumen('../../assets/img/carritovacio.png','Tu carrito esta vacio',true,false,null,false,null,false,null,false,null)

}
else{
 //el carrito esta lleno
 //recorro el carrito de compras
 let totalcompra=0
 carrito.forEach(function(producto){
    console.log(producto.precio)
    console.log(producto.cantidad)
    let preciopartida=producto.precio.split('$')[1]
    
    let subtototal=Number(preciopartida)*Number(producto.cantidad)

    totalcompra=totalcompra+subtototal
    
    
    let idtotalcompra=document.getElementById("totalcompra")
    idtotalcompra.textContent="Total: " + totalcompra
    
    
     llenarResumen(producto.foto,producto.objeto,false,true,producto.precio,true,("Cantidad:"+producto.cantidad),true,producto.descripcion,true,("Subtotal: "+subtototal))
 })   
}




let boton=document.getElementById("botonlimpiar")
boton.addEventListener("click",function(evento){
    localStorage.removeItem("carrito")
    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML=""
    cantidadcarrito.textContent=""
    let idtotalcompra=document.getElementById("totalcompra")
    idtotalcompra.classList.add("invisible")
    idtotalcompra.textContent=""
    localStorage.removeItem('cantidadcarrito')
    llenarResumen('../../assets/img/carritovacio.png','Tu carrito esta vacio',true,false,null,false,null,false,null)
})

    
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