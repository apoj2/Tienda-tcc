export function llenarResumen(fotoURL,nombreMensaje,banderaBoton,banderaPrecio,precioProducto,banderaCantidad,cantidadProducto,banderaDescripcion,descripcionProducto,banderaSubtotal,subtotalProducto){
    let contenedor=document.getElementById("contenedor")

    let fila=document.createElement("div")
    fila.classList.add("row","row-cols-1","row-cols-md-2","my-5","shadow","bg-light","p-2")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","my-3")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","border")
    
    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src=fotoURL

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent=nombreMensaje


    let boton=document.createElement("a")
    boton.classList.add("btn","btn-primary","w-50","d-block","mx-auto")
    boton.textContent="Ir a la tienda"
    boton.setAttribute("href","./tienda.html")
    
    let precio=document.createElement("h4")
    precio.textContent=precioProducto

    let cantidad=document.createElement("h5")
    cantidad.textContent=cantidadProducto

    let descripcion=document.createElement("h5")
    descripcion.textContent=descripcionProducto
    

    let subtotal=document.createElement("h5")
    subtotal.textContent=subtotalProducto

    columna1.appendChild(foto)
    columna2.appendChild(mensaje)
    if(banderaBoton){
    columna2.appendChild(boton)
    }
    if(banderaPrecio){
        columna2.appendChild(precio)
    }
    if(banderaCantidad){
        columna2.appendChild(cantidad)
    }
    if(banderaDescripcion){
        columna2.appendChild(descripcion)
    }
    if(banderaSubtotal){
        columna2.appendChild(subtotal)
    }

    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)
}