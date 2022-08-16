
export function navegacionproductos(evento){
  
    let objetoproducto={
    nombre:evento.target.parentElement.querySelector("h6").textContent,
    categoria:evento.target.parentElement.querySelector("h5").textContent
    }
    return(objetoproducto)
  
    


} 