//funcion para pintar productos en la tienda
export function pintarproductos(productos){
    let fila=document.getElementById('fila')

    productos.forEach(function(producto){

        //2.1 creadno columna desde js .createelemente(crear un elemento(<div></div>)) 
        let columna=document.createElement("div")
        //2.1.2 creando y modificando clase a un eelemento <div class="col"></div> <----
        columna.classList.add("col","my-3")
        //2.2 crenado tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","text-center")
        //2.3 creando fotos
        let fotoproducto=document.createElement("img")
        fotoproducto.classList.add("img-fluid","w-100")
        fotoproducto.src=producto.fotos[0]
    
        let nombreproducto=document.createElement("div")
        nombreproducto.textContent=producto.nombre
    
        //2.4
        let precio=document.createElement("div")
        precio.textContent="$"+producto.precio
    
        //2.6 detectando enventospara cambiar la imagen  de una imagen a otro
        columna.addEventListener("mouseover",function(){
            fotoproducto.src=producto.fotos[1]
        })
        columna.addEventListener("mouseleave",function(){
            fotoproducto.src=producto.fotos[0]
        })
    
        
        //3.defino padrs e hijos donde poner lo que cree
        
        tarjeta.appendChild(fotoproducto)
        tarjeta.appendChild(nombreproducto)
        tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
    
    let buscador=document.getElementById('buscador')
    
    buscador.addEventListener("keypress",function(evento){
        console.log(evento.target.value)
    })
}

// datos de la bd



//pasos para rrenderizar eituqtas html desde javascript
//traversing

//1.creare referencia en memoria(variable) que almacene la etiqueta sobre la cual voyan pintar
//(Etiqueta padre o Etiqueta raiz)



//2.recorro un arreglo y aplico traversing
