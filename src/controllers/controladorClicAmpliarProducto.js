
export function ampliarproductos(evento){
  
    let objetoproducto={
    foto:evento.target.parentElement.querySelector("img").src,
    objeto:evento.target.parentElement.querySelector("h3").textContent,
    precio:evento.target.parentElement.querySelector("h2").textContent,
    descripcion:evento.target.parentElement.querySelector("p").textContent,
    categoria:evento.target.parentElement.querySelector("h4").textContent
    }
    return(objetoproducto)
  
    


} 