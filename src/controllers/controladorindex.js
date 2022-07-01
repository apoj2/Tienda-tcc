let nombre="Juan"


//controlador de etiquetas
//1.Necesito almacenar una etiqueta en una variable
let titulo=document.getElementById("titulo1")
let imagen=document.getElementById('foto')
let titulo2=document.getElementById("titulo2")
let boton=document.getElementById("boton")
//2.Identifico que quiero controlar
//2.1 cambiando el texto
//2.2 cambiando la fuente
imagen.src='https://placeimg.com/640/480/any'

//3.modificando estilos 
//3.1Agregando una clase
titulo.classList.add('text-danger','fuentei')

//3.2Quitando una clase

titulo2.classList.remove('text-info')
titulo2.classList.add('text-danger')
//4.Escuchando eventos

boton.addEventListener('click',function(){
    titulo.textContent="chao "
    boton.addEventListener('click',function(){
        titulo.textContent="hola "
       
    
    
    })


})

