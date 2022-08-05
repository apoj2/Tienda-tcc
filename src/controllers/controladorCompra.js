
console.log("hola estamos comprando")
let producto=JSON.parse(localStorage.getItem('infoProducto'))

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

let textonombre=document.getElementById('nombreproducto')
textonombre.textContent=producto.objeto

let precioproducto=document.getElementById('precioproducto')
precioproducto.textContent=producto.precio

let descripcionproducto=document.getElementById("descripcionproducto")
descripcionproducto.textContent=producto.descripcion


let agregarevento= document.getElementById("agregaralcarrito")





agregarevento.addEventListener("click",function(evento){

    let cantidadcarrito=document.getElementById("cantidadcarrito")
    cantidadcarrito.classList.remove("invisible")

    let alerta=document.getElementById("alerta")
    alerta.classList.remove("invisible")

    setTimeout(function(){
        alerta.classList.add("invisible")
    },3000)

    let cantidad=document.getElementById("cantidad").value
    producto.cantidad=cantidad
//agregando elemento al arreglo
    carrito.push(producto)
    
    localStorage.setItem("carrito",JSON.stringify(carrito))
    //almaceno el carrito en el localstorage
 
           

    
})





