import {botonescategoriasproductos} from '../helpers/botonescategorias.js'
import {llenarnavcategorias} from './controladorllenadonavcategorias.js'
import{navegacionproductos}from './controladorClicAmpliarNavegacion.js'



llenarnavcategorias('navcategorias',botonescategoriasproductos)

let cantidad=localStorage.getItem("cantidadcarrito")

let cantidadcarrito=document.getElementById("cantidadcarrito")
cantidadcarrito.textContent=cantidad


let navcategoriastorage=localStorage.getItem('navcategorias')
console.log()
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

