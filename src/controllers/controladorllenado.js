
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

        //deteccion de evento mouse

        fotoproducto.addEventListener("mouseover",function(evento){
            fotoproducto.src=producto.fotos[1]
        })
        
        fotoproducto.addEventListener("mouseleave",function(evento){
            fotoproducto.src=producto.fotos[0]
        })

        tarjeta.appendChild(fotoproducto)
        tarjeta.appendChild(nombreproducto)
        tarjeta.appendChild(precioproducto)
        
        columna.appendChild(tarjeta)
        
        fila.appendChild(columna)


    })
}