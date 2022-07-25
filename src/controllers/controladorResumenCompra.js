let carrito=JSON.parse(localStorage.getItem('carrito'))

//crar una referencia en memoria para almacenar el contenedor
let contenedor=document.getElementById("contenedor")

//comparo o pregunto si el carrtio esta vacio
if(carrito==null){
    let fila=document.createElement("div")
    fila.classList.add("row","row-cols-1","row-cols-md-2","my-5")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","border-end")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12",)
    
    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src="../../assets/img/carritovacio.png"

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent="Tu carrito esta vacio"

    let boton=document.createElement("a")
    boton.classList.add("btn","btn-primary","w-50","d-block","mx-auto")
    boton.textContent="Ir a la tienda"
    boton.setAttribute("href","./index.html")

    columna1.appendChild(foto)
    columna2.appendChild(mensaje)
    columna2.appendChild(boton)
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)
}
else{
 //el carrito esta lleno
 

 //recoorro el carriot de compras
 carrito.forEach(function(producto){
    let fila=document.createElement("div")
    fila.classList.add("row","row-cols-1","my-5","d-flex","shadow","bg-light","rounded","w-100","h-100")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","border-end")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12",)

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src=producto.foto

    let nombre=document.createElement("h3")
    nombre.textContent=producto.nombre

    let precio=document.createElement("h4")
    precio.textContent=producto.precio

    let cantidad=document.createElement("h5")
    cantidad.textContent=producto.cantidad

    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    columna2.appendChild(precio)
    columna2.appendChild(cantidad)
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)
 })   
}