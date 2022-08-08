import { llenarResumen}from './controladorPintarResumen.js'
let carrito=JSON.parse(localStorage.getItem('carrito'))
let cantidaddecarrito=localStorage.getItem('cantidadcarrito')


let cantidadcarrito=document.getElementById('cantidadcarrito')

cantidadcarrito.textContent=cantidaddecarrito

console.log(carrito)

//comparo o pregunto si el carrtio esta vacio
if(carrito==null){

    
    llenarResumen('../../assets/img/carritovacio.png','Tu carrito esta vacio',true,false,null,false,null,false,null,false,null)

}
else{
 //el carrito esta lleno
 //recorro el carrito de compras
 carrito.forEach(function(producto){
    console.log(producto.precio)
    console.log(producto.cantidad)
    let preciopartida=producto.precio.split('$')[1]
    
    let subtototal=Number(preciopartida)*Number(producto.cantidad)

     llenarResumen(producto.foto,producto.objeto,false,true,producto.precio,true,("Cantidad:"+producto.cantidad),true,producto.descripcion,true,("Subtotal: "+subtototal))
 })   
}

let boton=document.getElementById("botonlimpiar")
boton.addEventListener("click",function(evento){
    localStorage.removeItem("carrito")
    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML=""
    cantidadcarrito.textContent=""
    localStorage.removeItem('cantidadcarrito')
    llenarResumen('../../assets/img/carritovacio.png','Tu carrito esta vacio',true,false,null,false,null,false,null)
})

