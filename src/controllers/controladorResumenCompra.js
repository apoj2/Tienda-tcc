import { llenarResumen}from './controladorPintarResumen.js'
let carrito=JSON.parse(localStorage.getItem('carrito'))



//comparo o pregunto si el carrtio esta vacio
if(carrito==null){

    
    llenarResumen('../../assets/img/carritovacio.png','Tu carrito esta vacio',true,false,null,false,null)

}
else{
 //el carrito esta lleno
 //recoorro el carriot de compras
 carrito.forEach(function(producto){
     llenarResumen(producto.foto,producto.objeto,false,true,producto.precio,false,null)
 })   
}

let boton=document.getElementById("botonlimpiar")
boton.addEventListener("click",function(evento){
    localStorage.removeItem("carrito")
    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML=""
    llenarResumen('../../assets/img/carritovacio.png','Tu carrito esta vacio',true,false,null,false,null)
})