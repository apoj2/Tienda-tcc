
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

        let filaestrellas=document.createElement("div")
        filaestrellas.classList.add("row","row-cols-5","row-cols-md-5","d-flex","bg-danger","w-100","mx-auto")

        let columnaestrella=document.createElement("div")
        columnaestrella.classList.add("col")
        let columnaestrella1=document.createElement("div")
        columnaestrella1.classList.add("col")
        let columnaestrella2=document.createElement("div")
        columnaestrella2.classList.add("col")
        let columnaestrella3=document.createElement("div")
        columnaestrella3.classList.add("col")
        let columnaestrella4=document.createElement("div")
        columnaestrella4.classList.add("col")

        let puntajeproducto=document.createElement("img")
        puntajeproducto.classList.add("img-fluid","estrellapuntaje")
        puntajeproducto.src='https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/Estrella.png?alt=media&token=a77f3d2d-b23a-411d-aa56-107e579f2d38'
        let puntajeproducto1=document.createElement("img")
        puntajeproducto1.classList.add("img-fluid","estrellapuntaje")
        puntajeproducto1.src='https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/Estrella.png?alt=media&token=a77f3d2d-b23a-411d-aa56-107e579f2d38'
        let puntajeproducto2=document.createElement("img")
        puntajeproducto2.classList.add("img-fluid","estrellapuntaje")
        puntajeproducto2.src='https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/Estrella.png?alt=media&token=a77f3d2d-b23a-411d-aa56-107e579f2d38'
        let puntajeproducto3=document.createElement("img")
        puntajeproducto3.classList.add("img-fluid","estrellapuntaje")
        puntajeproducto3.src='https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/Estrella.png?alt=media&token=a77f3d2d-b23a-411d-aa56-107e579f2d38'
        let puntajeproducto4=document.createElement("img")
        puntajeproducto4.classList.add("img-fluid","estrellapuntaje")
        puntajeproducto4.src='https://firebasestorage.googleapis.com/v0/b/apojtiendatcc.appspot.com/o/Estrella.png?alt=media&token=a77f3d2d-b23a-411d-aa56-107e579f2d38'
        


        //deteccion de evento mouse
       

        tarjeta.appendChild(fotoproducto)
        tarjeta.appendChild(nombreproducto)
        tarjeta.appendChild(precioproducto)
        tarjeta.appendChild(descripcionproducto)
        tarjeta.appendChild(filaestrellas)
        filaestrellas.appendChild(columnaestrella)
        filaestrellas.appendChild(columnaestrella1)
        filaestrellas.appendChild(columnaestrella2)
        filaestrellas.appendChild(columnaestrella3)
        filaestrellas.appendChild(columnaestrella4)
        if(producto.puntaje==1){
            columnaestrella.appendChild(puntajeproducto) 
        }   
        if(producto.puntaje==2){
            columnaestrella.appendChild(puntajeproducto) 
            columnaestrella1.appendChild(puntajeproducto1)  
        } 
        if(producto.puntaje==3){
            columnaestrella.appendChild(puntajeproducto)  
            columnaestrella1.appendChild(puntajeproducto1) 
            columnaestrella2.appendChild(puntajeproducto2) 
        } 
        if(producto.puntaje==4){
            columnaestrella.appendChild(puntajeproducto)  
            columnaestrella1.appendChild(puntajeproducto1) 
            columnaestrella2.appendChild(puntajeproducto2) 
            columnaestrella3.appendChild(puntajeproducto3) 
             
        } 
        if(producto.puntaje==5){
            columnaestrella.appendChild(puntajeproducto)  
            columnaestrella1.appendChild(puntajeproducto1) 
            columnaestrella2.appendChild(puntajeproducto2) 
            columnaestrella3.appendChild(puntajeproducto3) 
            columnaestrella4.appendChild(puntajeproducto4) 
        } 
        columna.appendChild(tarjeta)
        
        fila.appendChild(columna)


    })
}