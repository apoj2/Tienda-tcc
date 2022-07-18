
export function llenarProductos(productos){
    
    //el espacio donde voy a pintar
    let fila=document.getElementById("fila")
    
    fila.innerHTML=''

    productos.forEach(function(producto){
        
        let columna=document.createElement("div")
        columna.classList.add("col-12","my-3")
        
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","text-center","shadow")

        let fotoproducto=document.createElement("img")
        fotoproducto.classList.add("img-fluid","w-100")
        fotoproducto.src=producto.fotos[0]

        let nombreproducto=document.createElement("h3")
        nombreproducto.textContent=producto.nombre

        let precioproducto=document.createElement("h2")
        precioproducto.textContent="$"+producto.precio

        let descripcionproducto=document.createElement("p")
        descripcionproducto.textContent=producto.descripcion
        descripcionproducto.classList.add("d-none")

        //deteccion de evento mouse
       

        tarjeta.appendChild(fotoproducto)
        tarjeta.appendChild(nombreproducto)
        tarjeta.appendChild(precioproducto)
        tarjeta.appendChild(descripcionproducto)
        
        columna.appendChild(tarjeta)
        
        fila.appendChild(columna)


    })
}